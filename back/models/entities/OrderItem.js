'use strict';

const Entity = require('./Entity');

class OrderItem extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'order_items',
			primaries: ['id'],
			fields: {
				'id': Number,
				'order_id': Number,
				'product_id': Number,
				'quantity': Number
			}
		};
	}
}

module.exports = OrderItem;