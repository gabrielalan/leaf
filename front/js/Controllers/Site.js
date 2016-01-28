'use strict';

var ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	BuyButton = require('Widgets/Site/BuyButton');

module.exports = {

	"": function() {
		debugger;
	},

	"product/:id": function() {
		var similar = document.querySelector('.similar-products .similar-pager');

		if (similar)
			var sim = new ProductsCarousel(similar);
	},

	"cart": function() {
		var buyFinishButton = document.querySelectorAll('.cart .cart-finish');

		if (buyFinishButton)
			new BuyButton(buyFinishButton);
	}
};