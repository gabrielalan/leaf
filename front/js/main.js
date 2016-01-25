'use strict';

var Flux = require("Flux"),
	ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	BuyButton = require('Widgets/Site/BuyButton'),
	UserLocation = require('Widgets/Site/UserLocation');

var userLocal = new UserLocation(),
	pc = new ProductsCarousel(document.querySelector('.our-products .pc-pager'));

userLocal.render(document.body);

var similar = document.querySelector('.similar-products .similar-pager'),
	buyFinishButton = document.querySelectorAll('.cart .cart-finish');

if (similar) 
	var sim = new ProductsCarousel(similar);

if (buyFinishButton)
	new BuyButton(buyFinishButton);

window.userLocal = userLocal;
window.Flux = Flux;