'use strict';

var RLite = require('RLite'),
	Klass = require('Klass');

var RouteManager = Klass.create({

	name: 'RouteManager',

	manager: RLite(),

	usePathname: false,

	setRoutes: function(actions, usePathname) {
		this.usePathname = usePathname || false;

		for( var route in actions ) {
			this.manager.add(route, actions[route]);
		}

		this.initManager();
	},

	dispatch: function(path) {
		window.location.hash = path;
	},

	initManager: function() {
		window.addEventListener('hashchange', this.onHashChange.bind(this));

		this.onHashChange();
	},

	onHashChange: function() {
		var hash = (this.usePathname ? location.pathname : location.hash) || '#';

		this.manager.run(hash.slice(1));
	}
});

module.exports = new RouteManager();