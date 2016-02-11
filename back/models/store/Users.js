'use strict';

var connPool = require('../../db/ConnectionPool'),
	Store = require('./Store');

class User extends Store {

	getUser(user, password) {
		let deferred = Promise.defer(),
			SQL = 'SELECT * FROM users WHERE user = ? AND password = ?',
			values = [user, password];

		this.execute(SQL, values).then((rows) => {
			deferred.resolve(rows ? rows[0] : null);
		}).catch((err) => {
			deferred.reject(err);
		});

		return deferred.promise;
	}
}

module.exports = new User();