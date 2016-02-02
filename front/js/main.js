'use strict';

//Load common used libs
require('jquery');
require('bootstrap');

// Initiate all common widgets and classes
var Flux = require("Flux"),
	ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	UserLocation = require('Widgets/Site/UserLocation'),
	SiteRouteActions = require('Controllers/Site'),
	RouteManager = require('Routes/Manager'),
	CartCounter = require('Widgets/Site/CartCounter');

var userLocal = new UserLocation(),
	counter = new CartCounter();

userLocal.render(document.body);
counter.render(document.querySelector('.cart-button'));

new ProductsCarousel(document.querySelector('.our-products .pc-pager'));

new RouteManager(SiteRouteActions, true);

window.userLocal = userLocal;
window.Flux = Flux;