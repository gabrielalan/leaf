'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/site/userLocation'),
	Flux = require('Flux'),
	Storage = require('Common/UserLocationStorage'),
	Select = require('Widgets/Common/Select');

var UserLocation = Widget.extends({

	name: 'UserLocation',

	template: template,

	widgets: ['select'],

	select: new Select({
		store: Flux.store('UserLocationStore')
	}),

	render: function() {
		if( Storage.isSaved ) {
			return false;
		}

		this.parent.render.apply(this, arguments);

		Flux.actions.loadLocations();

		this.bindEvents();

		$(this.getEl()).modal({
			'backdrop': 'static',
			'keyboard': false,
			'show': true
		});
	},

	bindEvents: function() {
		var me = this, el = this.getEl(), button = el.querySelector('.save-location');

		button.addEventListener('click', function(){
			Storage.value = me.select.getValue();

			$(me.getEl()).modal('hide');
		});
	}
});

module.exports = UserLocation;