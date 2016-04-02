'use strict';

var knex = require('../../db/Knex'),
	Entity = require('../entities/CartItem');

module.exports = {

	removeAll(cart_id, transaction) {
		let query = knex('cart_items').where({ cart_id });

		if (transaction)
			query.transacting(transaction);

		return query.del();
	},

	save(data) {
		let record = new Entity();

		record.override(data);

		return record.save().then(result => {
			return record.getAllData();
		});
	},

	add(cart_id, product) {
		return this.get(cart_id, product.id).then(result => {
			let item = result[0], data = {
				cart_id,
				product_id: product.id,
				quantity: parseInt(product.quantity)
			};

			if (item) {
				data.id = item.id;
				data.quantity += item.quantity;
			}

			return this.save(data);
		});
	},

	get(cart_id, product_id) {
		return knex.select('cart_items.*').from('cart_items').where({'cart_id': cart_id, 'product_id': product_id});
	},

	count(token) {
		return knex.sum('cart_items.quantity as total')
			.from('cart_items')
			.innerJoin('carts', 'cart_items.cart_id', 'carts.id')
			.where('carts.token', token);
	},

	getAll(token, select) {
		const fixedSelect = ["cart_items.id", "cart_items.quantity", "products.name", "products.value", "products.id AS product_id"];
		const defaultSelect = ["(cart_items.quantity * products.value) AS total"];

		const usedSelect = fixedSelect.concat(select || defaultSelect);

		return knex
			.select(knex.raw(usedSelect.join(",")))
			.max('images.path as path')
			.from('cart_items')
			.innerJoin('carts', 'cart_items.cart_id', 'carts.id')
			.innerJoin('products', 'cart_items.product_id', 'products.id')
			.innerJoin('products_images', 'products_images.product_id', 'products.id')
			.joinRaw("INNER JOIN images ON images.id = products_images.image_id AND images.sizename = 'PRODUCT_VIEW'")
			.where('carts.token', token)
			.groupBy('cart_items.id', 'cart_items.quantity', 'products.name', 'products.value', 'products.id')
			.orderByRaw('cart_items.quantity DESC');
	}
};