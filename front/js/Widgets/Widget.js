'use strict';

var Observer = require('Common/Observer'),
	Utils = require('Common/Utils');

var Widget = Observer.extends({

	name: 'Widget',

	id: null,

	/**
	 * Template that wil be used
	 */
	template: undefined,

	/**
	 * Compiled HTML of the widget
	 */
	compiled: undefined,

	/**
	 * This array defines what property of that widget is a widget too
	 */
	widgets: [],

	construct: function( configuration ) {
		this.id = Utils.hash();

		Utils.extend(this, configuration);

		/* bind on after:render to dispatch on childs of childs */
		this.on('after:render', this.executeFnOnChilds.bind(this, 'trigger', ['after:render']));
	},

	getEl: function() {
		return window.document.getElementById(this.id);
	},

	compile: function() {
		if( !this.template )
			throw new Error('Template not found');

		if( !this.compiled ) {
			this.executeFnOnChilds('compile');

			this.compiled = this.template(this);

			this.trigger('after:compile');
		}

		return this.compiled;
	},

	render: function(el) {
		$(el).append(this.compile());

		this.trigger('after:render');
	},

	executeFnOnChilds: function( fnName, args ) {
		var me = this, current;

		me.widgets.map(function( widget ){
			current = me[widget];

			if( Utils.is(current, 'array') ) {
				current.map(function(child){
					child[fnName].apply(child, args || []);	
				});
			} else if( current ) {
				current[fnName].apply(current, args || []);
			}
		});
	}
});

module.exports = Widget;