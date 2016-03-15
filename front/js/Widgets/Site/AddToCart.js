'use strict';

var Klass = require('Klass'),
	Flux = require("Flux"),
	Loading = require('Widgets/Loading');

var AddToCart = Klass.create({

	name: 'AddToCart',

	button: null,

	quantity: null,

	construct: function(button) {
		this.button = $(button);
		this.quantity = $('#' + this.button.data('quantity'));

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
			data: JSON.stringify(this.getData()),
			contentType: "application/json; charset=utf-8",
			processData: false,
			complete: function(result) {
				me.loading.setState(false);

				Flux.actions.loadCartTotal();
			}
		});
	},

	getData: function () {
		return {
			id: this.button.data('id'),
			quantity: this.quantity.val()
		}
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