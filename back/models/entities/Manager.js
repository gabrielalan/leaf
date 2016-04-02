'use strict';

let knex = require('../../db/Knex');

class Manager {
	constructor() {
		this.executions = {
			deletes: [],
			persists: []
		};
	}

	persistAll(entities) {
		entities.forEach(current => this.persist(current));
	}

	deleteAll(entities) {
		entities.forEach(current => this.delete(current));
	}

	persist(entity) {
		this.executions.persists.push(entity);
	}

	delete(entity) {
		this.executions.deletes.push(entity);
	}

	flushDelete(trx) {
		let promises = [];

		this.executions.deletes.forEach((current) => {
			current.setTransactionObject(trx);

			promises.push(current.delete());
		});

		return promises;
	}

	flushPersist(trx) {
		let promises = [];

		this.executions.persists.forEach((current) => {
			current.setTransactionObject(trx);

			promises.push(current.save());
		});

		return promises;
	}

	flush(transaction) {
		let defer = Promise.defer();

		let execute = (trx) => {
			let deletePromises, persistPromises, promises;

			try {
				deletePromises = this.flushDelete(trx);
				persistPromises = this.flushPersist(trx);

				promises = persistPromises.concat(deletePromises);
			} catch(error) {
				return defer.reject(error);
			}

			return Promise.all(promises).then(function(results) {
				defer.resolve(results);
			}).catch(function(error) {
				defer.reject(error);
			});
		};

		if (!transaction)
			knex.transaction(execute);
		else
			execute(transaction);

		return defer.promise;
	}
}

module.exports = Manager;