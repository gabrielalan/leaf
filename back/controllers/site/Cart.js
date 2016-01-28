'use strict';

var Controller = require('../Controller');

class Payment extends Controller {

	total( req, res ) {
		res.send({
			success: true,
			result: {
				total: Math.round(Math.random() * 10)
			}
		});
	}
}

module.exports = Payment;