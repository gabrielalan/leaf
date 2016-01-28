'use strict';

var Flux = require("Flux"),
	ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	UserLocation = require('Widgets/Site/UserLocation'),
	SiteRouteActions = require('Controllers/Site'),
	RouteManager = require('Routes/Manager');

var userLocal = new UserLocation();
userLocal.render(document.body);

new ProductsCarousel(document.querySelector('.our-products .pc-pager'));

new RouteManager(SiteRouteActions, true);

window.userLocal = userLocal;
window.Flux = Flux;