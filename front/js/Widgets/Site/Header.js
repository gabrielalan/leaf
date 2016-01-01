'use strict';

var Widget = require('Widgets/Widget'),
	TopSearch = require('Widgets/Site/Header/TopSearch'),
	RightMenu = require('Widgets/Site/Header/RightMenu'),
	template = require('Templates/site/header');

var Header = Widget.extends({

	name: 'Header',

	template: template,

	widgets: ['search', 'rightMenu', 'nav'],

	search: new TopSearch(),

	rightMenu: new RightMenu()
});

module.exports = Header;