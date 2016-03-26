'use strict';

var knex = require('../../db/Knex'),
	OrderItemsStore = require('./OrderItems'),
	Entity = require('../entities/Order');

module.exports = {

	create(data, items) {
		let defer = Promise.defer(), record = new Entity();

		record.override(data);

		record.save().then(result => {
			OrderItemsStore.addToOrder(record.getAllData().id, items)
				.then(result => defer.resolve())
				.catch(error => defer.reject(new Error(error)));
		}).catch(error => defer.reject(new Error(error)));

		return defer.promise;
	}
};