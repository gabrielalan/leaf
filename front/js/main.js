'use strict';

var Flux = require("Flux"),
	UserLocation = require('Widgets/Site/UserLocation');

var userLocal = new UserLocation();

userLocal.render(document.body);

window.userLocal = userLocal;
window.Flux = Flux;