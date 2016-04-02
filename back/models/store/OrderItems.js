'use strict';

var knex = require('../../db/Knex'),
	Entity = require('../entities/OrderItem'),
	Manager = require('../entities/Manager');

module.exports = {

	addToOrder(order_id, items, transaction) {
		let manager = new Manager();

		items.map(item => {
			let entity = new Entity();

			entity.override({
				order_id,
				product_id: item.id,
				quantity: item.quantity
			});

			manager.persist(entity);
		});

		return manager.flush(transaction);
	}
};