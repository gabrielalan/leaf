'use strict';

var mysql = require('mysql'),
	config = require('../config.json').DB;

config.connectionLimit = 50;

var pool  = mysql.createPool(config);

class ConnectionPool {
	getManager() {
		return pool;
	}

	get() {
		let deferred = Promise.defer();

		pool.getConnection((err, connection) => {
			if( err )
				throw err;

			deferred.resolve(connection);
		});

		return deferred.promise;
	}
}

module.exports = new ConnectionPool();