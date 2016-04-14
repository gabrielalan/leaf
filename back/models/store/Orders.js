'use strict';

var knex = require('../../db/Knex'),
	PaymentConstants = require('../../payment/Constants'),
	logger = require('../../logger/Logger'),
	Entity = require('../entities/Order'),
	OrderItemsStore = require('./OrderItems'),
	OrderInfoEntity = require('../entities/OrderInfo');

module.exports = {

	updateOrderInfo(order_id, transaction) {
		let shipping = transaction.getShipping(), sender = transaction.getSender();

		shipping.address.postal_code = shipping.address.postalCode;

		delete shipping.address.postalCode;

		let entity = new OrderInfoEntity(), data = shipping ? shipping.address || {} : {};

		Object.assign(data, {
			order_id,
			name: sender.name,
			email: sender.email,
			phone: sender.phone.areaCode + ' ' + sender.phone.number,
			shipping_cost: shipping.cost
		});

		entity.override(data);

		return knex.select('order_id').from('order_infos').where({order_id}).then(result => {
			let id = result[0];

			if (id)
				return entity.update();

			return entity.insert();
		});
	},

	updateOrder(id, transaction) {
		let data = {
			pagseguro_sale_id: transaction.getCode(),
			status: transaction.getStatus(),
			gross_amount: transaction.getGrossAmount(),
			net_amount: transaction.getNetAmount(),
			date_updated: knex.raw('now()')
		};

		knex('orders').where('id', id).update(data)
			.then(result => result)
			.catch(error => logger.log('error', error))
	},

	updateFromAPI(transaction) {
		this.get(parseInt(transaction.getReference())).then(result => {
			if (!result)
				return false;

			this.updateOrderInfo(result.id, transaction);
			this.updateOrder(result.id, transaction);

			logger.log('info', 'Updating order ' + result.id + ' to status ' + transaction.getStatus());
		});
	},

	get(id) {
		return knex.select('id').from('orders').where({id}).then(result => result[0]);
	},

	getItems(id) {
		return knex.select('products.name', 'products.description', 'order_items.quantity').from('order_items').leftJoin('products', 'order_items.product_id', 'products.id').where('order_items.order_id', id);
	},

	getGrid() {
		return knex
			.select('*')
			.from('orders')
			.leftJoin('order_infos', 'orders.id', 'order_infos.order_id')
			.then(result => {
			return result.map(current => {
				current.statusName = PaymentConstants.statusText[parseInt(current.status)];

				return current;
			});
		});
	},

	create(data, items, transaction) {
		let defer = Promise.defer();

		knex('orders').insert(data)
			.then(id => {
				let orderData = {id};

				OrderItemsStore.addToOrder(orderData.id, items, transaction)
					.then(result => defer.resolve(orderData))
					.catch(error => defer.reject(new Error(error)));
			}).catch(error => defer.reject(new Error(error)));

		return defer.promise;
	}
};