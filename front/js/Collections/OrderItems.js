'use strict';

var Backbone = require('Backbone'),
	Base = require('Collections/BaseCollection'),
	Model = require('Models/OrderItem'),
	Utils = require('Common/Utils');

var OrderItems = Base.extend({

	initialize: function(models, options) {
		this.id = options.id;
	},

	url: function() {
		return Utils.baseUrl + '/admin/rest/orders/' + this.id + '/items';
	},

	model: Model
});

module.exports = OrderItems;