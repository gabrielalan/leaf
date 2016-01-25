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
			complete: function(result) {
				var url = result.responseJSON.url;

				me.loading.setState(true);

				window.location = url;
			}
		});
	},

	onClick: function () {
		this.loading.setState(true);

		this.doCheckout();
	}
});

module.exports = BuyButton;