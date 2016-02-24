'use strict';

var Base = require('Collections/BaseCollection'),
	Model = require('Models/Product'),
	Utils = require('Common/Utils');

var Products = Base.extend({

	url: Utils.baseUrl + '/admin/rest/products',

	model: Model
});

module.exports = new Products();