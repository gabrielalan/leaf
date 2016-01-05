'use strict';

var Fluxxor = require("Fluxxor"),
	Actions = require("Actions/UserLocationActions");

var UserLocationStore = Fluxxor.createStore({
	
	initialize: function() {
		this.loading = false;
		this.error = null;
		this.data = [];

		this.bindActions(
			Actions.constants.LOAD_LOCATION, this.onLoad,
			Actions.constants.LOAD_LOCATION_SUCCESS, this.onLoadSuccess,
			Actions.constants.LOAD_LOCATION_FAIL, this.onLoadFail
		);
	},

	find: function( id ) {
		try {
			return this.data.filter(function(current){
				return current.value === id;
			});
		} catch(e) {
			return [];
		}
	},

	onLoad: function() {
		this.loading = true;
		this.emit("change");
	},

	onLoadSuccess: function(payload) {
		this.loading = false;
		this.error = null;
		this.data = payload;
		this.emit("change");
	},

	onLoadFail: function(payload) {
		this.loading = false;
		this.error = payload;
		this.emit("change");
	}
});

module.exports = UserLocationStore;