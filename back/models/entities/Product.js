'use strict';

let Entity = require('./Entity');

class Product extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'products',
			primaries: ['id'],
			fields: {
				'id': Number,
				'name': String,
				'description': String,
				'quantity': Number,
				'value': Number,
				'highlight': Boolean,
				'category_id': Number
			}
		};
	}
}

module.exports = Product;