'use strict';

var knex = require('../../db/Knex'),
	Entity = require('../entities/Cart');

module.exports = {

	getToken(req, res) {
		let cookie = req.cookies.l34fc4rr0d3c0m7r4;

		if (!cookie) {
			cookie = req.sessionID;

			res.cookie('l34fc4rr0d3c0m7r4', cookie, { httpOnly: true });
		}

		return cookie;
	},

	create(token) {
		let record = new Entity();

		record.set('token', token);

		return record.save().then(result => {
			return record.getAllData();
		});
	},

	get(token) {
		return knex.select('*').from('carts').where('token', token).then(result => {
			let cart = result[0];

			if (!cart) {
				return this.create(token);
			}

			return cart;
		});
	}
};