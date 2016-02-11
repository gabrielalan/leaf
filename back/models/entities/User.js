'use strict';

let Entity = require('./Entity');

class User extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'users',
			primaries: ['id'],
			fields: {
				'id': Number,
				'name': String,
				'user': String,
				'password': String,
				'email': String
			}
		};
	}
}

module.exports = User;