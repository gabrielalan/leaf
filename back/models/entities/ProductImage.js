'use strict';

let Entity = require('./Entity');

class ProductImage extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'products_images',
			primaries: ['product_id'],
			fields: {
				'product_id': Number,
				'image_id': Number
			}
		};
	}
}

module.exports = ProductImage;