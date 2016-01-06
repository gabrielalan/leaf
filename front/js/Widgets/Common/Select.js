'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/common/select'),
	Loading = require('Widgets/Loading');

var Select = Widget.extends({

	name: 'Select',

	template: template,

	widgets: ['loading'],

	loading: new Loading(),

	getValue: function() {
		return this.getEl().querySelector('select').value;
	}
});

module.exports = Select;