'use strict';

var Knex = require('knex'),
	config = require('../config.json').DB;

module.exports = Knex({
	client: 'mysql',
	connection: config,
	pool: {
		min: 0,
		max: 10
	}
});