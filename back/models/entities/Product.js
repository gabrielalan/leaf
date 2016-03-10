'use strict';

let Entity = require('./Entity'),
	leafCache = require('../../cache/LeafCache');

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

		this.on('after:save', this.afterSave);
	}

	afterSave() {
		leafCache.remove('defaultData');
	}
}

module.exports = Product;