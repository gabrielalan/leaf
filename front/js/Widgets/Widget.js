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

	/** 
	 * Flux store
	 */
	store: null,

	construct: function( configuration ) {
		this.id = Utils.hash();

		Utils.extend(this, configuration);

		/* bind on after:render to dispatch on childs of childs */
		this.on('after:render', this.executeFnOnChilds.bind(this, 'trigger', ['after:render']));

		this.setStoreListeners();
	},

	setStoreListeners: function() {
		if( !this.store )
			return false;

		this.store.on('change', this.onStoreChange.bind(this));
	},

	/**
	 * Dispatched when the store changes status
	 */
	onStoreChange: function() {
		var isLoading = this.loading ? this.loading.isLoading : false,
			usingLoading = this.hasLoadingWidget(),
			newValue = (typeof this.store.loading !== 'undefined' && this.store.loading);

		this.setLoading(newValue);

		if( newValue === false && ( isLoading === true || !usingLoading ) ) {
			this.updateView();
		}
	},

	/**
	 * That method assumes that loading property is instance of Loading Widget
	 */
	setLoading: function(loading) {
		if( this.loading )
			this.loading.setState(loading);
	},

	hasLoadingWidget: function() {
		return this.widgets.indexOf['loading'] >= 0;
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

	updateView: function() {
		var el = this.getEl();

		this.compiled = false;

		$(el).replaceWith(this.compile());

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