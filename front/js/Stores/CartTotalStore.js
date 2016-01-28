'use strict';

var Fluxxor = require("Fluxxor"),
	Actions = require("Actions/CartTotalActions");

var CartTotalStore = Fluxxor.createStore({
	
	initialize: function() {
		this.loading = false;
		this.error = null;
		this.data = [];

		this.bindActions(
			Actions.constants.LOAD_CART_TOTAL, this.onLoad,
			Actions.constants.LOAD_CART_TOTAL_SUCCESS, this.onLoadSuccess,
			Actions.constants.LOAD_CART_TOTAL_FAIL, this.onLoadFail
		);
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

module.exports = CartTotalStore;