'use strict';

var extend = require('util')._extend;

var EMAIL = 'manadistribuidor@gmail.com',
	TOKEN = 'D908097FD05A4B5D9997D35F16B4D3C4',
	HOSTNAME = 'sandbox.pagseguro.uol.com.br',
	PROTOCOL = 'https',

	HTTP_REQUEST_DEFAULT = {
		hostname: 'ws.' + HOSTNAME,
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
		NOTIFICATION: '/v3/transactions/notifications/',
		TRANSACTION: '/v3/transactions/'
	},

	getCheckoutUrl(id) {
		return PROTOCOL + '://' + HOSTNAME + this.PATH.CHECKOUT + '/payment.html?code=' + id;
	},

	getTransactionOptions(oid, override) {
		let options = extend(override || {}, HTTP_REQUEST_DEFAULT);

		options.path = this.PATH.TRANSACTION + oid + this.QUERY;

		options.method = 'GET';

		return options;
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