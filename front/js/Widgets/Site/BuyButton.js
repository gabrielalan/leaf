'use strict';

var Klass = require('Klass'),
	Loading = require('Widgets/Loading');

var BuyButton = Klass.create({

	name: 'BuyButton',

	buttons: null,

	construct: function(buttons) {
		this.buttons = $(buttons);

		this.initLoading();

		this.bindEvents();
	},

	initLoading: function() {
		this.loading = new Loading();

		this.loading.compile();

		$(document.body).append(this.loading.compiled);

		this.loading.setFixed(true);
	},

	bindEvents: function() {
		this.buttons.on('click', this.onClick.bind(this));
	},

	doCheckout: function() {
		var me = this;

		$.ajax({
			url: '/rest/payment/checkout',
			success: function(response) {
				var url = response.url;

				me.loading.setState(false);

				window.location = url;
			},
			error: function(result) {
				me.loading.setState(false);

				alert('Desculpe, um erro ocoreu ao registrar a venda, tente novamente mais tarde!');

				console.log(result.responseJSON);
			}
		});
	},

	onClick: function () {
		this.loading.setState(true);

		this.doCheckout();
	}
});

module.exports = BuyButton;