'use strict';

var Backbone = require('Backbone'),
	Utils = require('Common/Utils');

var OrderItem = Backbone.Model.extend({
	url: function() {
		var id = this.id || '';

		return Utils.baseUrl + '/admin/rest/orders/' + id;
	},

	defaults: {
		name: null,
		description: null,
		quantity: null
	}
});

module.exports = OrderItem;