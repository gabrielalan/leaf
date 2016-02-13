'use strict';

var Backbone = require('Backbone'),
	Base = require('Collections/BaseCollection'),
	UserLocationModel = require('Models/UserLocation'),
	Utils = require('Common/Utils');

var UserLocation = Base.extend({

	url: Utils.baseUrl + '/rest/locations',

	model: UserLocationModel
});

module.exports = new UserLocation();