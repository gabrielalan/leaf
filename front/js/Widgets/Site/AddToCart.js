'use strict';

var Klass = require('Klass'),
	Flux = require("Flux"),
	Loading = require('Widgets/Loading');

var AddToCart = Klass.create({

	name: 'AddToCart',

	button: null,

	quantity: null,

	construct: function(button, quantityInput) {
		this.button = $(button);
		this.quantity = $(quantityInput);

		this.initLoading();

		this.bindEvents();
	},

	initLoading: function() {
		this.loading = new Loading();

		this.loading.compile();

		this.button.append(this.loading.compiled);
	},

	bindEvents: function() {
		this.button.on('click', this.onClick.bind(this));
	},

	add: function() {
		var me = this;

		$.ajax({
			url: '/rest/cart/add',
			method: 'post',
			complete: function(result) {
				me.loading.setState(false);

				Flux.actions.loadCartTotal();
			}
		});
	},

	onClick: function () {
		if (this.loading.isLoading)
			return false;

		this.loading.setState(true);

		this.add();
		return false;
	}
});

module.exports = AddToCart;