'use strict';

const Entity = require('./Entity'),
	leafCache = require('../../cache/LeafCache');

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

		this.on('after:save', this.afterSave);
	}

	afterSave() {
		leafCache.remove('defaultData');
	}
}

module.exports = Category;