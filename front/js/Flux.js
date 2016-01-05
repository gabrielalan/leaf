'use strict';

var Fluxxor = require('Fluxxor'),
    UserLocationActions = require("Actions/UserLocationActions"),
    UserLocationStore = require("Stores/UserLocationStore");

module.exports = new Fluxxor.Flux({
	'UserLocationStore': new UserLocationStore()
}, UserLocationActions.actions);