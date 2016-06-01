'use strict';

var ProductsCarousel = require('Widgets/Site/ProductsCarousel'),
	AddToCart = require('Widgets/Site/AddToCart'),
	ProductImageViewer = require('Widgets/Site/ProductImageViewer'),
	Quantity = require('Widgets/Site/Quantity'),
	BuyButton = require('Widgets/Site/BuyButton'),
	FormSender = require('Widgets/Site/FormSender'),
	RemoveButton = require('Widgets/Site/RemoveCartItemButton');

module.exports = {

	"": function() {},

	"howtobeleaf": function() {
		var form = document.getElementById('howToBeLeafForm');

		new FormSender(form);
	},

	"product/:id": function() {
		var similar = document.querySelector('.similar-products .similar-pager'),
			imageBig = document.querySelector('.product-images .product-image-bigger'),
			images = document.querySelectorAll('.product-image-list .product-image'),
			quantities = document.querySelectorAll('.product-quantity'),
			addToCart = document.querySelector('.product-add-to-cart');

		new ProductsCarousel(similar);
		new AddToCart(addToCart);
		new ProductImageViewer(images, imageBig);
		new Quantity(quantities);
	},

	"cart": function() {
		var buyFinishButton = document.querySelectorAll('.cart .cart-finish'),
			deleteButtons = document.querySelectorAll('.remove-cart-item');

		if (buyFinishButton)
			new BuyButton(buyFinishButton);

		if (deleteButtons.length)
			new RemoveButton(deleteButtons);
	}
};