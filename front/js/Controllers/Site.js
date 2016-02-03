'use strict';

var ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	AddToCart = require('Widgets/Site/AddToCart'),
	BuyButton = require('Widgets/Site/BuyButton');

module.exports = {

	"": function() {},

	"product/:id": function() {
		var similar = document.querySelector('.similar-products .similar-pager'),
			addToCart = document.querySelector('.product-add-to-cart');

		new ProductsCarousel(similar);
		new AddToCart(addToCart);
	},

	"cart": function() {
		var buyFinishButton = document.querySelectorAll('.cart .cart-finish');

		if (buyFinishButton)
			new BuyButton(buyFinishButton);
	}
};