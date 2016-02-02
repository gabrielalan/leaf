'use strict';

var Backbone = require('Backbone'),
	Utils = require('Common/Utils');

var CartTotal = Backbone.Model.extend({
	urlRoot: Utils.baseUrl + '/rest/cart/total',

	defaults: {
		total: 0
	}
});

module.exports = CartTotal;