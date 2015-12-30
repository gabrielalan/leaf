'use strict';

var Klass = require('Klass');

var Widget = Klass.create({

	/**
	 * Template that wil be used
	 */
	template: undefined,

	/**
	 * Rendered HTML of the widget
	 */
	rendered: undefined,

	construct: function() {	
	},

	compile: function() {
		if( !this.template )
			throw new Error('Template not found');

		if( !this.rendered )
			this.rendered = this.template(this);

		return this.rendered;
	},

	render: function(el) {
		el.innerHTML = this.compile();
	}
});

module.exports = Widget;