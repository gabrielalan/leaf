'use strict';

var Backbone = require('Backbone'),
	Base = require('Collections/BaseCollection'),
	CategoryModel = require('Models/Category'),
	Utils = require('Common/Utils');

var Categories = Base.extend({

	url: Utils.baseUrl + '/admin/rest/categories',

	model: CategoryModel
});

module.exports = new Categories();