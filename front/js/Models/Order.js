'use strict';

var Backbone = require('Backbone'),
	Utils = require('Common/Utils');

var Order = Backbone.Model.extend({
	url: function() {
		var id = this.id || '';

		return Utils.baseUrl + '/admin/rest/orders/' + id;
	},

	defaults: {
		id: null,
		token: null,
		pagseguro_checkout_id: null,
		pagseguro_sale_id: null,
		status: null,
		statusName: null,
		gross_amount: null,
		net_amount: null,
		date_created: null,
		date_updated: null,
		name: null,
		email: null,
		phone: null,
		street: null,
		number: null,
		complement: null,
		district: null,
		city: null,
		state: null,
		country: null,
		postal_code: null,
		shipping_cost: null
	}
});

module.exports = Order;