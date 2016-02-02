'use strict';

var UserLocationCollection = require('Collections/UserLocation');

var constants = {
	LOAD_LOCATION: "LOAD_LOCATION",
	LOAD_LOCATION_SUCCESS: "LOAD_LOCATION_SUCCESS",
	LOAD_LOCATION_FAIL: "LOAD_LOCATION_FAIL"
};

var collection = new UserLocationCollection();

var actions = {
	loadLocations: function() {
		var me = this;

		me.dispatch(constants.LOAD_LOCATION);

		collection.fetch({
			success: function(collection){
				me.dispatch(constants.LOAD_LOCATION_SUCCESS, collection.models);
			},
			error: function(collection, response){
				me.dispatch(constants.LOAD_LOCATION_FAIL, response);
			}
		});
	}
};

module.exports = {
	constants: constants,
	actions: actions
};