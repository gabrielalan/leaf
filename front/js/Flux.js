'use strict';

var Fluxxor = require('Fluxxor'),
	CartTotalActions = require("Actions/CartTotalActions"),
	CartTotalStore = require("Stores/CartTotalStore"),
    UserLocationActions = require("Actions/UserLocationActions"),
    UserLocationStore = require("Stores/UserLocationStore");

var flux = new Fluxxor.Flux({
	'UserLocationStore': new UserLocationStore()
}, UserLocationActions.actions);

flux.addStore('CartTotalStore', new CartTotalStore());

flux.addActions(CartTotalActions.actions);

module.exports = flux;