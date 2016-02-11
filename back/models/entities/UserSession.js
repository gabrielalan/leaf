'use strict';

let Entity = require('./Entity');

class UserSession extends Entity {
	constructor() {
		super();

		this.map = {
			table: 'user_sessions',
			primaries: ['id'],
			fields: {
				'id': Number,
				'sid': String,
				'user_id': Number
			}
		};
	}
}

module.exports = UserSession;