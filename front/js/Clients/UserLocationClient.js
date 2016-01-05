'use strict';

var Observer = require('Common/Observer'),
	Utils = require('Common/Utils');

var UserLocationClient = Observer.extends({
	name: 'UserLocationClient',

	url: Utils.baseUrl + '/rest/locations',

	load: function() {
		var me = this;

		$.ajax({
			url: me.url,
			method: 'GET',
			success: function(response) {
				me.trigger('success', response);
			},
			error: function(response) {
				me.trigger('fail', response);
			}
		});
	}
});

module.exports = new UserLocationClient();