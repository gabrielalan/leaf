'use strict';

let connPool = require('../../db/ConnectionPool');

class Manager {
	constructor() {
		this.executions = {
			deletes: [],
			persists: []
		};
	}

	persist(entity) {
		this.executions.persists.push(entity);
	}

	delete(entity) {
		this.executions.deletes.push(entity);
	}

	flushDelete(connection) {
		let promises = [];

		this.executions.deletes.forEach((current) => {
			current.setConnection(connection);

			promises.push(current.delete());
		});

		return promises;
	}

	flushPersist(connection) {
		let promises = [];

		this.executions.persists.forEach((current) => {
			current.setConnection(connection);

			promises.push(current.save());
		});

		return promises;
	}

	flush() {
		let defer = Promise.defer();

		connPool.get().then((connection) => {
			let deletePromises, persistPromises;

			try {
				console.log(this.executions.persists.length);
				deletePromises = this.flushDelete(connection);
				persistPromises = this.flushPersist(connection);
			} catch(error) {
				defer.reject(error);
			}

			Promise.all(persistPromises).then((result) => {
				defer.resolve(result);
			}).catch((err) => {
				defer.reject(err);
			});
		});

		return defer.promise;
	}
}

module.exports = Manager;