'use strict';

var Controller = require('../Controller'),
	fs = require('fs'),
	ProductsStore = require('../../models/store/Products'),
	CategoriesStore = require('../../models/store/Categories'),
	leafCache = require('../../cache/LeafCache'),
	handlebars = require('handlebars');

function getDefaultData() {
	let cached = leafCache.get('defaultData'),
		deferred = Promise.defer();

	if( cached ) {
		deferred.resolve(cached);

		return deferred.promise;
	}

	let promises = [ProductsStore.getHomeProducts(), CategoriesStore.getCategoriesMenu()];

	Promise.all(promises).then((results) => {
		let params = results[0];

		params.categories = results[1];

		leafCache.set('defaultData', params, 60 * 10 * 1000);

		deferred.resolve(params);
	});

	return deferred.promise;
}

class Site extends Controller {

	constructor() {
		super();

		this.registerPartials();
	}

	registerPartials() {
		var carousel 	= fs.readFileSync('back/templates/site/partials/carousel.html', "utf-8"),
			who 		= fs.readFileSync('back/templates/site/partials/who.html', "utf-8"),
			header 		= fs.readFileSync('back/templates/site/partials/header.html', "utf-8"),
			menu 		= fs.readFileSync('back/templates/site/partials/menu.html', "utf-8"),
			othermenus 	= fs.readFileSync('back/templates/site/partials/othermenus.html', "utf-8"),
			layout 		= fs.readFileSync('back/templates/site/layout.html', "utf-8");

		// static partials
		handlebars.registerPartial('carousel', carousel);
		handlebars.registerPartial('who', who);
		handlebars.registerPartial('header', header);
		handlebars.registerPartial('menu', menu);
		handlebars.registerPartial('othermenus', othermenus);

		// layout
		handlebars.registerPartial('layout', layout);
	}

	product( req, res ) {
		var template = require('../../templates/site/pages/product');

		getDefaultData()
			.then((results) => {
				var html = template(results);
				
				res.send(html);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	search( req, res ) {
		var template = require('../../templates/site/pages/search');

		getDefaultData().then((results) => {
			var html = template(results);
			
			res.send(html);
		});	
	}

	home( req, res ) {
		var template = require('../../templates/site/pages/home');

		getDefaultData().then((results) => {
			var html = template(results);
			
			res.send(html);
		});
	}
}

module.exports = Site;