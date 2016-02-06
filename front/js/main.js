'use strict';

//Load common used libs
require('jquery');
require('bootstrap');

// Initiate all common widgets and classes
var Flux = require("Flux"),
	React = require('react'),
	ReactDOM = require('ReactDOM'),
	ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	UserLocation = require('Views/Site/UserLocation'),
	SiteRouteActions = require('Controllers/Site'),
	RouteManager = require('Routes/Manager'),
	CartCounter = require('Widgets/Site/CartCounter');

var counter = new CartCounter();

ReactDOM.render(React.createElement(UserLocation, null), document.querySelector('.temporary-place'));

counter.render(document.querySelector('.cart-button'));

new ProductsCarousel(document.querySelector('.our-products .pc-pager'));

new RouteManager(SiteRouteActions, true);

window.Flux = Flux;