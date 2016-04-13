'use strict';

var Backbone = require('Backbone'),
	Base = require('Collections/BaseCollection'),
	Model = require('Models/Order'),
	Utils = require('Common/Utils');

var Orders = Base.extend({

	url: Utils.baseUrl + '/admin/rest/orders',

	model: Model
});

module.exports = new Orders();