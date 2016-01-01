'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/site/navigation');

var Navigation = Widget.extends({

	name: 'Navigation',

	template: template,

	widgets: ['items'],

	items: []
});

module.exports = Navigation;