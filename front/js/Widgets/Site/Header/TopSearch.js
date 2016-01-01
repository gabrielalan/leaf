'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/site/topSearch');

var TopSearch = Widget.extends({

	name: 'TopSearch',

	template: template
});

module.exports = TopSearch;