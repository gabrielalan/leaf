'use strict';

var connPool = require('../../db/ConnectionPool'),
	knex = require('../../db/Knex');

module.exports = {

	getCategory(id) {
		return knex
			.select('*')
			.from('categories')
			.leftJoin('images', 'images.id', 'categories.image_id')
			.where({ 'categories.id': id });
	},

	getAllCategories() {
		return knex.raw('SELECT c.*, c2.name AS parent FROM categories c LEFT JOIN categories c2 ON c2.id = c.category_id ORDER BY c.category_id, c.id').then((results) => {
			return results[0];
		});
	},

	mountMenuJson(parents, childs) {
		childs.map((child) => {
			parents.map((parent) => {

				if( parent.id !== child.category_id )
					return parent;

				if( !parent.childs )
					parent.childs = [];

				parent.childs.push(child);

				return parent;
			});
		});

		return parents;
	},

	getCategoriesMenu() {
		let deferred = Promise.defer();

		connPool.get().then((connection) => {
			connection.query('SELECT * FROM categories WHERE category_id IS NULL', (err, parents) => {
				if( err )
					throw err;

				connection.query('SELECT c.*, i.path FROM categories c LEFT JOIN images i ON i.id = c.image_id WHERE category_id IS NOT NULL', (err, childs) => {
					if( err )
						throw err;

					deferred.resolve(this.mountMenuJson(parents, childs));

					connection.release();
				});
			});
		});

		return deferred.promise;
	}
};