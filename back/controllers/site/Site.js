'use strict';

var Controller = require('../Controller'),
	fs = require('fs'),
	ProductsStore = require('../../models/store/Products'),
	CategoriesStore = require('../../models/store/Categories'),
	handlebars = require('handlebars');

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

	search( req, res ) {
		var template = require('../../templates/site/pages/search');

		Promise.all([ProductsStore.getHomeProducts(), CategoriesStore.getCategoriesMenu()]).then((results) => {
			let params = results[0];

			params.categories = results[1];

			var html = template(params);
			
			res.send(html);
		});
		
	}

	home( req, res ) {
		var home = require('../../templates/site/pages/home');

		Promise.all([ProductsStore.getHomeProducts(), CategoriesStore.getCategoriesMenu()]).then((results) => {
			let params = results[0];

			params.categories = results[1];

			var html = home(params);
			
			res.send(html);
		});
		
	}
}

module.exports = Site;