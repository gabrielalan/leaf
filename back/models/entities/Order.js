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
				'status': String,
				'gross_amount': Number,
				'net_amount': Number,
				'date_created': String,
				'date_updated': String
			}
		};
	}
}

module.exports = Order;