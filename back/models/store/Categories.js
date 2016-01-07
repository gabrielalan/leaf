'use strict';

var connPool = require('../../db/ConnectionPool');

module.exports = {

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