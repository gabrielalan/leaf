'use strict';

var Klass = require('Klass');

var Observer = Klass.create({

	name: 'Observer',

	/**
	 * Get listeners from a event
	 */
	getEventListeners: function(event) {
		/* add here, because prototype was creating an global object */
		if( !this.listeners ) 
			this.listeners = {};

		if( typeof this.listeners[event] === 'undefined' )
			this.listeners[event] = [];

		return this.listeners[event];
	},

	/**
	 * Add an listener on a event
	 */
	on: function(event, fn) {
		this.getEventListeners(event).push(fn);

		return true;
	},

	/**
	 * Removes one listener
	 */
	off: function(event, fn) {
		var listeners = this.getEventListeners(event);

		this.listeners[event] = listeners.filter(function(current){
			return current.toString() === fn.toString() ? false : true;
		});

		return true;
	},

	/**
	 * Dispatch an event
	 */
	trigger: function(event, data) {
		var listeners = this.getEventListeners(event);

		if( !data )
			data = {};

		data.event = event;

		for( var count = 0, len = listeners.length; count < len; count++ ) {
			listeners[count].call(this, data);
		}

		return true;
	}
});

module.exports = Observer;