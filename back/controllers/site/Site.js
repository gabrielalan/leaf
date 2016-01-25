'use strict';

var Controller = require('../Controller'),
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

	success( req, res ) {
		var template = require('../../templates/site/pages/success');

		getDefaultData().then((results) => {
			var html = template(results);
			
			res.send(html);
		});	
	}

	cart( req, res ) {
		var template = require('../../templates/site/pages/cart');

		getDefaultData().then((results) => {
			var html = template(results);

			res.send(html);
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