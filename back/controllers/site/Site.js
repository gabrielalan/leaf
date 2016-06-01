'use strict';

var Controller = require('../Controller'),
	Constants = require('../../payment/Constants'),
	PaymentAPI = require('../../payment/Mediator'),
	logger = require('../../logger/Logger'),
	ProductsStore = require('../../models/store/Products'),
	CategoriesStore = require('../../models/store/Categories'),
	leafCache = require('../../cache/LeafCache'),
	OrderStore = require('../../models/store/Orders'),
	CartStore = require('../../models/store/Carts'),
	CartItemStore = require('../../models/store/CartItems'),
	notificate = require('../../config.json').mail.notificate,
	senders = require('../../mail/sender');

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

	sendHowToBe(req, res, next) {
		let data = req.body;
console.log(data);
		senders.sendHowToBe({
			subject: 'Novo contato enviado via site',
			to: notificate
		}, data, function(err, info){
			if(err){
				res.send({ success: false });

				return logger.log('error', err);
			}

			res.send({ success: true });

			logger.log('info', info);
		});
	}

	howToBeLeaf(req, res, next) {
		var template = require('../../templates/site/pages/howtobeleaf');

		getDefaultData().then((results) => {
			let data = results;

			var html = template(data);

			res.send(html);
		}).catch((err) => {
			next(error);
		});
	}

	howToBuy(req, res, next) {
		var template = require('../../templates/site/pages/howtobuy');

		getDefaultData().then((results) => {
			let data = results;

			var html = template(data);

			res.send(html);
		}).catch((err) => {
			next(error);
		});
	}

	success( req, res, next ) {
		var template = require('../../templates/site/pages/success');

		Promise.all([getDefaultData(), PaymentAPI.transaction(req.query.transaction_id)]).then((results) => {
			let data = results[0], transaction = PaymentAPI.getTransactionObject(results[1].transaction);

			data.transaction = {
				items: transaction.getItems(),
				total: transaction.getGrossAmount(),
				shipping: transaction.getShipping(),
				sender: transaction.getSender()
			};

			senders.sendOrderUpdate({
				subject: 'Compra atualizada!',
				to: notificate
			}, {
				name: transaction.getSender().name,
				items: transaction.getItems(),
				shipping: transaction.getShipping().cost,
				total: transaction.getGrossAmount()
			}, function(err, info){
				if(err){
					return logger.log('error', err);
				}

				logger.log('info', info);
			});

			var html = template(data);

			OrderStore.updateFromAPI(transaction);

			res.send(html);
		}).catch(error => {
			res.redirect('/');
		});
	}

	cart( req, res ) {
		var template = require('../../templates/site/pages/cart');

		Promise.all([getDefaultData(), CartItemStore.getAll(CartStore.getToken(req, res))]).then(results => {
			let data = results[0];

			data.items = results[1];

			if (data.items.length > 1)
				data.subtotal = data.items.reduce((a, b) => (a.total || a) + b.total);
			else if (data.items.length === 1)
				data.subtotal = data.items[0].total;
			else
				data.subtotal = 0;

			data.tax = parseFloat(Constants.shipping.cost);

			data.total = data.subtotal + data.tax;

			try {
				var html = template(data);
			} catch(e) {
				console.log(e);
			}

			res.send(html);
		}).catch((err) => {
			next(error);
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