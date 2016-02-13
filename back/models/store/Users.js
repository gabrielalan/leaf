'use strict';

let knex = require('../../db/Knex');

class User {

	getUser(user, password) {
		return knex('users')
			.where({ user, password })
			.select('*')
			.then((results) => {
				return results[0];
			});
	}
}

module.exports = new User();