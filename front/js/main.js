'use strict';

var Flux = require("Flux"),
	ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	UserLocation = require('Widgets/Site/UserLocation');

var userLocal = new UserLocation(),
	pc = new ProductsCarousel(document.querySelector('.our-products .pc-pager'));

userLocal.render(document.body);

var similar = document.querySelector('.similar-products .similar-pager');

if (similar) 
	var sim = new ProductsCarousel(similar);

window.userLocal = userLocal;
window.Flux = Flux;