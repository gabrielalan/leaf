'use strict';

var knex = require('../../db/Knex'),
	logger = require('../../logger/Logger'),
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
			name: current.image_name,
			sizename: current.sizename
		});

		delete product.image_id;
		delete product.path;
		delete product.image_name;
		delete product.sizename;
	});

	return objectToArray(normalized);
}

function srhinkImages(rows) {
	return rows.map(product => {
		let images = {};

		product.images.forEach(image => {
			if (!(image.name in images)) {
				images[image.name] = {};
			}

			images[image.name][image.sizename] = image;
		});

		product.images = objectToArray(images);

		return product;
	});
}

function getProductQuery() {
	return knex
		.select('products.*', 'categories.name AS category', 'images.id AS image_id', 'images.path', 'images.sizename', 'images.name AS image_name')
		.from('products')
		.leftJoin('categories', 'categories.id', 'products.category_id')
		.leftJoin('products_images', 'products_images.product_id', 'products.id')
		.joinRaw("LEFT JOIN images ON images.id = products_images.image_id");
}

function getAllProductQuery() {
	return knex
		.select('products.*', 'categories.name AS category')
		.from('products')
		.leftJoin('categories', 'categories.id', 'products.category_id');
}

function getListProductsQuery(size) {
	return knex.select('products.id', 'products.name', 'products.description', 'products.value')
		.max('images.path as path')
		.from('products')
		.innerJoin('products_images', 'products_images.product_id', 'products.id')
		.joinRaw("INNER JOIN images ON images.id = products_images.image_id AND images.sizename = '" + size + "'")
		.groupBy('products.id', 'products.name', 'products.description', 'products.value')
		.orderByRaw('products.id DESC');
}

module.exports = {

	admin: {
		removeAllProductImages(id) {
			return knex('products_images').where('product_id', id).del();
		},

		removeAllImages(product_id) {
			return knex.select('image_id').from('products_images').where({ product_id }).then(results => {
				let ids = results.map(current => current.image_id);

				return knex('products_images').where({ product_id }).del().then(result => knex('images').whereIn('id', ids).del());
			});
		},

		getProduct(id) {
			return getProductQuery().where({ 'products.id': id }).then(normalizeProductImages);
		},

		getAllProducts() {
			return getAllProductQuery();
		},

		removeImage(product, image) {
			return knex.select('*').from('images').where('id', image).then(result => {
				if (!result.length)
					return false;

				let name = result[0].name, subquery = knex.select('id').from('images').where('name', name);

				return knex('products_images')
					.whereIn('image_id', subquery)
					.andWhere({ product_id: product })
					.del()
					.then(result => {
						return knex('images').where('name', name).del();
					});
			});
		}
	},

	get(id, similar) {
		return knex
			.select('products.*', 'images.id AS image_id', 'images.path', 'images.sizename', 'images.name AS image_name')
			.from('products')
			.innerJoin('products_images', 'products_images.product_id', 'products.id')
			.joinRaw("INNER JOIN images ON images.id = products_images.image_id AND images.sizename IN('PRODUCT_VIEW', 'PRODUCT_SMALLEST')")
			.where({ 'products.id': id })
			.then(result => {
				let normalized = srhinkImages(normalizeProductImages(result));

				return !similar ? normalized[0] : this.getSimilar(normalized[0]);
			}).catch(error => {
				logger.log('error', error);
			});
	},

	getSimilar(product) {
		return getListProductsQuery('PRODUCT_CAROUSEL_V')
			.whereNot('products.id', product.id)
			.andWhere('products.category_id', product.category_id)
			.then(results => {
				product.similars = results.length ? this.createNewsArray(results, 5) : false;

				return product;
			}).catch(error => {
				logger.log('error', error);
			});
	},

	getByCategory(id) {
		return getListProductsQuery('PRODUCT_MEDIUM_V')
			.whereIn('category_id', function() {
				this.select('id').from('categories').where('category_id', id);
			})
			.orWhere('category_id', id);
	},

	searchProduct(term) {
		return getListProductsQuery('PRODUCT_MEDIUM_V').where('products.name', 'LIKE', '%' + term + '%');
	},

	normalizeImageObject(data, where, extraDataFn) {
		let current = where[data.id];

		if( !current ) {
			where[data.id] = data;

			current = where[data.id];

			(extraDataFn || function(){})(current);

			current.images = {};
		}

		current.images[data.sizename] = data.path;
	},

	/* mount the object that will be used by the front */
	normalizeHighlight( rows ) {
		let highlight = {}, hgCount = 0, hgNames = ['BIGGER', 'BIG', 'SMALL'];

		rows.map((current) => {
			let exists = current.id in highlight;

			this.normalizeImageObject(current, highlight, data => {
				data[hgNames[hgCount]] = true;
			});

			if (!exists)
				hgCount++;
		});

		return highlight;
	},

	normalizeNews(rows) {
		let news = {};

		rows.map((current) => {
			this.normalizeImageObject(current, news);
		});

		return this.createNewsArray(news, 3);
	},

	/* unfortunately view only accepts this format to carousel */
	createNewsArray(news, page) {
		let toView = [], current = [];

		toView.push(current);

		for( var index in news ) {
			current.push(news[index]);

			if( current.length === page ) {
				current = [];

				toView.push(current);
			}
		}

		return toView;
	},

	getHomeHighlights() {
		let defer = Promise.defer();

		knex.raw("SELECT p.id, MAX(p.name) as name, MAX(p.description) as description, i.sizename, MAX(i.path) as path " +
			"FROM products p " +
			"INNER JOIN products_images pi ON p.id = pi.product_id " +
			"INNER JOIN images i ON pi.image_id = i.id  AND i.sizename IN('PRODUCT_BIGGER', 'PRODUCT_BIG', 'PRODUCT_MEDIUM') " +
			"WHERE p.highlight = 1 " +
			"GROUP BY p.id, i.sizename " +
			"ORDER BY p.id DESC " +
			"LIMIT 9")
			.then(results => {
				let highlights = results[0],
					ids = highlights.map(current => current.id);

				return knex.select('products.*', 'images.sizename', 'images.path')
					.from('products')
					.innerJoin('products_images', 'products_images.product_id', 'products.id')
					.joinRaw("INNER JOIN images ON images.id = products_images.image_id AND images.sizename = 'PRODUCT_CAROUSEL_H'")
					.whereNotIn('products.id', ids)
					.orderByRaw('products.id DESC')
					.limit(10)
					.then(carousel => {
						let highlight = this.normalizeHighlight(highlights),
							news = this.normalizeNews(carousel);

						return defer.resolve({highlight, news});
					}).catch(error => {
						defer.reject(error);
					});
			}).catch(error => {
				defer.reject(error);
			});

		return defer.promise;
	}
};