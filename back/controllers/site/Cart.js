'use strict';

var Controller = require('../Controller'),
	logger = require('../../logger/Logger'),
	CartItem = require('../../models/entities/CartItem'),
	Store = require('../../models/store/Carts'),
	CartItemStore = require('../../models/store/CartItems'),
	EntityManager = require('../../models/entities/Manager');

function error(res, err) {
	logger.log('error', err);

	let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

	res.status(500).send(message);
}

class Payment extends Controller {

	total( req, res ) {
		CartItemStore.count(Store.getToken(req, res)).then(result => {
			let record = result[0];

			res.send({
				total: record ? record.total : 0
			});
		}).catch(err => error(res, err));
	}

	add(req, res) {
		Store.get(Store.getToken(req, res)).then((cart) => {
			CartItemStore.add(cart.id, req.body).then(item => {
				res.send({
					data: {cart, item}
				});
			}).catch(err => error(res, err));
		}).catch(err => error(res, err));
	}

	remove(req, res) {
		let entity = new CartItem(), manager = new EntityManager();

		entity.set('id', req.params.id);

		manager.delete(entity);

		manager.flush()
			.then(result => res.sendStatus(200))
			.catch(err => error(res, err));
	}
}

module.exports = Payment;