'use strict';

var knex = require('../../db/Knex'),
	connPool = require('../../db/ConnectionPool');

function objectToArray(obj) {
	let arr = [];

	for (let index in obj)
		arr.push(obj[index]);

	return arr;
}

function normalizeProductImages(products) {
	var normalized = {}, product;

	products.forEach((current) => {
		if (!normalized[current.id]) {
			normalized[current.id] = product = current;

			product.images = [];
		} else {
			product = normalized[current.id];
		}

		if (!current.image_id)
			return true;

		product.images.push({
			id: current.image_id,
			path: current.path,
			sizename: current.sizename
		});

		delete product.image_id;
		delete product.path;
		delete product.sizename;
	});

	return objectToArray(normalized);
}

module.exports = {

	admin: {

		getAllProducts() {
			return knex
				.select('products.*', 'categories.name AS category', 'images.id AS image_id', 'images.path', 'images.sizename')
				.from('products')
				.leftJoin('categories', 'categories.id', 'products.category_id')
				.leftJoin('products_images', 'products_images.product_id', 'products.id')
				.joinRaw("LEFT JOIN images ON images.id = products_images.image_id AND images.sizename = 'PRODUCT_SMALL'")
				.then(normalizeProductImages)
				;
		}

	},



	/* old querys to public site */

	homeProductsQuery: {
		sql: 'SELECT p.*, i.path, i.sizename FROM products p INNER JOIN products_images pi ON p.id = pi.product_id INNER JOIN images i ON pi.image_id = i.id ORDER BY highlight DESC, id DESC LIMIT 12',
		nestedTables: true
	},

	/* mount the object that will be used by the front */
	mountHomeProducts( rows ) {
		let highlight = {}, news = {}, hgCount = 0, hgNames = ['BIGGER', 'BIG', 'SMALL'];

		let add = (data, where) => {
			let current = where[data.id];

			if( !current ) {
				where[data.id] = data;

				current = where[data.id];

				if( data.highlight === 1 ) {
					current[hgNames[hgCount]] = true;
				}

				current.images = {};
			}

			current.images[data.sizename] = data.path;
		};

		rows.map((current) => {
			var exists = current.id in highlight;

			if( current.highlight === 1  && hgCount < 3 ) {
				add(current, highlight);

				if( !exists )
					hgCount++;
			} else {
				add(current, news);
			}
		});

		return {highlight, news: this.normalizeNews(news)};
	},

	/* unfortunately view only accepts this format to carousel */
	normalizeNews(news) {
		let toView = [], current = [];

		toView.push(current);

		for( var index in news ) {
			current.push(news[index]);

			if( current.length === 3 ) {
				current = [];

				toView.push(current);
			}
		}

		return toView;
	},

	getHomeProducts() {
		let deferred = Promise.defer();

		connPool.get().then((connection) => {
			connection.query(this.homeProductsQuery, (err, rows) => {
				if( err )
					throw err;

				deferred.resolve(this.mountHomeProducts(rows));

				connection.release();
			});
		});

		return deferred.promise;
	}
};