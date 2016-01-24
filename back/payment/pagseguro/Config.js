'use strict';

var extend = require('util')._extend;

var EMAIL = 'manadistribuidor@gmail.com',
	TOKEN = 'D908097FD05A4B5D9997D35F16B4D3C4',

	HTTP_REQUEST_DEFAULT = {
		hostname: 'ws.sandbox.pagseguro.uol.com.br',
		port: 443,
		method: 'POST',
		headers: {
			'Content-Type': 'application/xml;charset=UTF-8'
		}
	};

module.exports = {

	QUERY: '?email=' + EMAIL + '&token=' + TOKEN,

	PATH: {
		CHECKOUT: '/v2/checkout',
		NOTIFICATION: '/v3/transactions/notifications/'
	},

	getNotificationOptions(oid, override) {
		let options = extend(override || {}, HTTP_REQUEST_DEFAULT);

		options.path = this.PATH.NOTIFICATION + oid + this.QUERY;

		options.method = 'GET';

		return options;
	},

	getCheckoutOptions(override) {
		let options = extend(override || {}, HTTP_REQUEST_DEFAULT);

		options.path = this.PATH.CHECKOUT + this.QUERY;

		return options;
	}
};