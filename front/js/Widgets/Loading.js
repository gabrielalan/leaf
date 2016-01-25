'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/loading');

var Loading = Widget.extends({

	name: 'Loading',

	template: template,

	isLoading: false,

	setFixed: function(fixed) {
		$(this.getEl()).toggleClass('load-fixed', Boolean(fixed));
	},

	setState: function(loading) {
		this.isLoading = loading;

		$(this.getEl()).toggleClass('loading', Boolean(loading));
	}
});

module.exports = Loading;