'use strict';

let Entity = require('./Entity');

class Category extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'categories',
			primaries: ['id'],
			fields: {
				'id': Number,
				'name': String,
				'description': String,
				'image_id': Number,
				'category_id': Number
			}
		};
	}
}

module.exports = Category;