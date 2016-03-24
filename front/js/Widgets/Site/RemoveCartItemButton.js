'use strict';

var Klass = require('Klass'),
	Loading = require('Widgets/Loading');

var RemoveCartItemButton = Klass.create({

	name: 'RemoveCartItemButton',

	buttons: null,

	construct: function(buttons) {
		this.buttons = $(buttons);

		this.bindEvents();
	},

	bindEvents: function() {
		this.buttons.on('click', this.onClick.bind(this));
	},

	remove: function(url) {
		var me = this;

		$.ajax({
			url: url,
			method: 'DELETE',
			complete: function(result) {
				window.location.reload();
			}
		});
	},

	onClick: function (evt) {
		this.remove(evt.currentTarget.getAttribute('href'));

		evt.stopPropagation();
		evt.preventDefault();
		return false;
	}
});

module.exports = RemoveCartItemButton;