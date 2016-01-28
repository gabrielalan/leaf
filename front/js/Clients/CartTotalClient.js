'use strict';

var Observer = require('Common/Observer'),
	Utils = require('Common/Utils');

var CartTotalClient = Observer.extends({
	name: 'CartTotalClient',

	url: Utils.baseUrl + '/rest/cart/total',

	load: function(fn1, fn2) {
		var me = this;

		$.ajax({
			url: me.url,
			method: 'GET',
			success: function(response) {
				fn1(response);
			},
			error: function(response) {
				fn2(response);
			}
		});
	}
});

module.exports = new CartTotalClient();