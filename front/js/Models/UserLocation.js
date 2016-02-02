'use strict';

var Backbone = require('Backbone');

var UserLocation = Backbone.Model.extend({
	defaults: {
		id: null,
		name: null,
		value: null
	}
});

module.exports = UserLocation;