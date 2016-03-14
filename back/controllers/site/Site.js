'use strict';

var Controller = require('../Controller'),
	logger = require('../../logger/Logger'),
	ProductsStore = require('../../models/store/Products'),
	CategoriesStore = require('../../models/store/Categories'),
	leafCache = require('../../cache/LeafCache'),
	handlebars = require('handlebars');

function getDefaultData() {
	let cached = leafCache.get('defaultData'),
		deferred = Promise.defer();

	if( cached ) {
		deferred.resolve(Object.create(cached));

		return deferred.promise;
	}

	let promises = [ProductsStore.getHomeHighlights(), CategoriesStore.getCategoriesMenu()];

	Promise.all(promises).then((results) => {
		let params = results[0];

		params.categories = results[1];

		leafCache.set('defaultData', params, 60 * 10 * 1000);

		deferred.resolve(params);
	}).catch(err => {
		logger.log('error', err);

		deferred.reject({
			highlight: [],
			news: [],
			categories: []
		});
	});

	return deferred.promise;
}

class Site extends Controller {

	product( req, res, next ) {
		var template = require('../../templates/site/pages/product');

		Promise.all([getDefaultData(), ProductsStore.get(req.params.id, true)]).then((results) => {
			let data = results[0];

			data.product = results[1];

			data.product.available = data.product.quantity > 0;

			var html = template(data);

			res.send(html);
		}).catch((err) => {
			next(error);
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

	search( req, res, next ) {
		var template = require('../../templates/site/pages/search');

		Promise.all([getDefaultData(), ProductsStore.searchProduct(req.query.term)]).then((results) => {
			let data = results[0];

			data.term = req.query.term;

			data.products = results[1];

			var html = template(data);
			
			res.send(html);
		}).catch(error => {
			next(error);
		});
	}

	category( req, res, next ) {
		var template = require('../../templates/site/pages/category');

		Promise.all([getDefaultData(), CategoriesStore.getCategory(req.params.id), ProductsStore.getByCategory(req.params.id)]).then((results) => {
			let data = results[0];

			data.category = results[1][0];
			data.products = results[2];

			var html = template(data);

			res.send(html);
		}).catch(error => {
			next(error);
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