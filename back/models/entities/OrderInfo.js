'use strict';

const Entity = require('./Entity');

class Order extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'order_infos',
			primaries: ['order_id'],
			fields: {
				'order_id': Number,
				'name': String,
				'email': String,
				'phone': String,
				'street': String,
				'number': String,
				'complement': String,
				'district': String,
				'city': String,
				'state': String,
				'country': String,
				'postal_code': String,
				'shipping_cost': Number
			}
		};
	}
}

module.exports = Order;