'use strict';

const Entity = require('./Entity');

class CartItem extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'cart_items',
			primaries: ['id'],
			fields: {
				'id': Number,
				'cart_id': Number,
				'product_id': Number,
				'quantity': Number
			}
		};
	}
}

module.exports = CartItem;