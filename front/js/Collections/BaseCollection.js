'use strict';

var Backbone = require('Backbone');

var Base = Backbone.Collection.extend({

	normalize: function(filter) {
		var models = this.models;

		if (filter)
			models = this.where(filter);

		return models.map(function(current){
			return current.attributes;
		});
	}
});

module.exports = Base;