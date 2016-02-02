'use strict';

var CartTotalModel = require('Models/CartTotal');

var model = new CartTotalModel();

var constants = {
	LOAD_CART_TOTAL: "LOAD_CART_TOTAL",
	LOAD_CART_TOTAL_SUCCESS: "LOAD_CART_TOTAL_SUCCESS",
	LOAD_CART_TOTAL_FAIL: "LOAD_CART_TOTAL_FAIL"
};

var actions = {
	loadCartTotal: function() {
		var me = this;

		me.dispatch(constants.LOAD_CART_TOTAL);

		model.fetch({
			success: function(){
				me.dispatch(constants.LOAD_CART_TOTAL_SUCCESS, model.attributes);
			},
			error: function(collection, response){
				me.dispatch(constants.LOAD_CART_TOTAL_FAIL, response);
			}
		});
	}
};

module.exports = {
	constants: constants,
	actions: actions
};