'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/site/navigationItem');

var NavigationItem = Widget.extends({

	name: 'NavigationItem',

	template: template,

	active: false,

	label: '',

	construct: function() {
		this.parent.construct.apply(this, arguments);

		this.on('after:render', this.bindEvents);
	},

	bindEvents: function() {
		var me = this, el = this.getEl().querySelector('a');

		el.addEventListener('click', function(){
			me.trigger('click');
		});
	}
});

module.exports = NavigationItem;