'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/loading');

var Loading = Widget.extends({

	name: 'Loading',

	template: template,

	setState: function(loading) {
		if( loading ) {
			$(this.getEl()).addClass('loading');
		} else {
			$(this.getEl()).removeClass('loading');
		}
	}
});

module.exports = Loading;