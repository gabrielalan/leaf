'use strict';

module.exports = {

	/**
	 * Tests the object type:
	 * Utils.is({}, 'object') === true
	 * Utils.is([], 'array') === true
	 * Utils.is('', 'string') === true
	 * Utils.is(0, 'number') === true
	 * ...
	 */
	is( object, type ) {
		var objectType = Object.prototype.toString.call(object);
		
		return (new RegExp('\\[object ' + type + '\\]', 'gi')).test(objectType);
	},

	hash: function() {
		return 'c' + window.crypto.getRandomValues(new Uint8Array(10)).map((n) => n.toString(8)).join('a');
	},

	extend: function( destination, source ) {
		for (var property in source)
			destination[property] = source[property];
	}
};