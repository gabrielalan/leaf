'use strict';

const Entity = require('./Entity');

class Order extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'orders',
			primaries: ['id'],
			fields: {
				'id': Number,
				'token': String,
				'pagseguro_checkout_id': String,
				'pagseguro_sale_id': String,
				'status': String
			}
		};
	}
}

module.exports = Order;