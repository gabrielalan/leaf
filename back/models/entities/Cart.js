'use strict';

const Entity = require('./Entity');

class Cart extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'carts',
			primaries: ['id'],
			fields: {
				'id': Number,
				'token': String
			}
		};
	}
}

module.exports = Cart;