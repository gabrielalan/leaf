'use strict';

var Backbone = require('Backbone'),
	UserLocationModel = require('Models/UserLocation'),
	Utils = require('Common/Utils');

var UserLocation = Backbone.Collection.extend({

	url: Utils.baseUrl + '/rest/locations',

	model: UserLocationModel,

	normalize: function() {
		return this.models.map(function(current){
			return current.attributes;
		});
	}
});

module.exports = new UserLocation();