'use strict';

var UserLocationClient = require('Clients/UserLocationClient');

var constants = {
	LOAD_LOCATION: "LOAD_LOCATION",
	LOAD_LOCATION_SUCCESS: "LOAD_LOCATION_SUCCESS",
	LOAD_LOCATION_FAIL: "LOAD_LOCATION_FAIL"
};

var actions = {
	loadLocations: function() {
		var me = this;

		me.dispatch(constants.LOAD_LOCATION);

		UserLocationClient.on('success', function(data){
			me.dispatch(constants.LOAD_LOCATION_SUCCESS, data.result);
		});

		UserLocationClient.on('fail', function(data){
			me.dispatch(constants.LOAD_LOCATION_FAIL, data);
		});

		UserLocationClient.load();
	}
};

module.exports = {
	constants: constants,
	actions: actions
};