'use strict';

let connPool = require('../../db/ConnectionPool');

class Store {

	getEntity() {
		if (!this.entity)
			throw new Error('Theres not entity setted on that store');

		return this.entity;
	}

	setEntity(reference) {
		this.entity = reference;
	}

	execute(query, values) {
		let deferred = Promise.defer();

		connPool.get().then((connection) => {
			connection.query(query, values, (err, results) => {
				if( err )
					deferred.reject(err);

				deferred.resolve(results);

				connection.release();
			});
		});

		return deferred.promise;
	}
}

module.exports = Store;