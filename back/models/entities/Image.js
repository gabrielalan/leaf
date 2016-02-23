'use strict';

let Entity = require('./Entity');

class Category extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'images',
			primaries: ['id'],
			fields: {
				'id': Number,
				'path': String,
				'sizename': String
			}
		};
	}
}

module.exports = Category;