'use strict';

let Entity = require('./Entity');

class Session extends Entity {
	constructor(data) {
		super();

		this.map = {
			table: 'sessions',
			primaries: ['id'],
			fields: {
				'id': Number,
				'sid': String,
				'session': String,
				'expire': Number
			}
		};
	}
}

module.exports = Session;