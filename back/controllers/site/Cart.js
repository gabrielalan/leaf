'use strict';

var Controller = require('../Controller'),
	Entity = require('../../models/entities/Entity'),
	EntityManager = require('../../models/entities/Manager');

class Payment extends Controller {

	total( req, res ) {
		res.send({
			success: true,
			result: {
				total: Math.round(Math.random() * 10)
			}
		});
	}

	add(req, res) {
		let entity = new Entity(), manager = new EntityManager();

		entity.override(req.body);

		manager.persist(entity);

		manager.flush().then((result) => {
			res.send({
				success: true,
				result
			});
		}).catch((error) => {
			res.send({
				success: false,
				message: error.message,
				error
			});
		});
	}
}

module.exports = Payment;