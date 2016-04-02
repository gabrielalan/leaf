'use strict';

var knex = require('../../db/Knex'),
	OrderItemsStore = require('./OrderItems'),
	Entity = require('../entities/Order');

module.exports = {

	create(data, items, transaction) {
		let defer = Promise.defer(), record = new Entity();

		record.override(data);

		record.setTransactionObject(transaction);

		record.save().then(order => {
			let orderData = record.getAllData();

			OrderItemsStore.addToOrder(orderData.id, items, transaction)
				.then(result => defer.resolve(orderData))
				.catch(error => defer.reject(new Error(error)));
		}).catch(error => defer.reject(new Error(error)));

		return defer.promise;
	}
};