'use strict';

var CartTotalClient = require('Clients/CartTotalClient');

var constants = {
	LOAD_CART_TOTAL: "LOAD_CART_TOTAL",
	LOAD_CART_TOTAL_SUCCESS: "LOAD_CART_TOTAL_SUCCESS",
	LOAD_CART_TOTAL_FAIL: "LOAD_CART_TOTAL_FAIL"
};

var actions = {
	loadCartTotal: function() {
		var me = this;

		me.dispatch(constants.LOAD_CART_TOTAL);

		CartTotalClient.load(function(data){
			me.dispatch(constants.LOAD_CART_TOTAL_SUCCESS, data.result);
		}, function(data){
			me.dispatch(constants.LOAD_CART_TOTAL_FAIL, data);
		});
	}
};

module.exports = {
	constants: constants,
	actions: actions
};