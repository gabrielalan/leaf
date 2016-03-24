'use strict';

var Klass = require('Klass'),
	Loading = require('Widgets/Loading');

var Quantity = Klass.create({

	name: 'Quantity',

	elements: null,

	construct: function(elements) {
		this.elements = $(elements);

		this.bindEvents();
	},

	bindEvents: function() {
		this.elements.off('click');
		this.elements.on('click', 'a', this.onClick.bind(this));
		this.elements.on('keyup', 'input', this.onKeyDown.bind(this));
	},

	onKeyDown: function(evt) {
		var input = evt.currentTarget, value = parseInt(input.value);

		input.value = !value || value <= 0 ? 1 : value;
	},

	stepMore: function(input) {
		var value = parseInt(input.value);

		input.value = value + 1;
	},

	stepLess: function(input) {
		var value = parseInt(input.value);

		input.value = value <= 1 ? 1 : value - 1;
	},

	onClick: function(evt) {
		var input = evt.currentTarget.parentNode.querySelector('input');

		if (evt.currentTarget.classList.contains('product-quantity-more'))
			this.stepMore(input);
		else
			this.stepLess(input);

		evt.preventDefault();
		return false;
	}
});

module.exports = Quantity;