'use strict';

var Utils = require('Common/Utils');

var Klass = {
	create: function() {
		var methods = arguments[0], 
			klass = function() { this.construct.apply(this, arguments); };

		klass.extends = Klass.create.bind(undefined, klass);

		if( arguments.length >= 2 ) {
			klass.prototype = Object.create(arguments[0].prototype);
			klass.prototype.parent = arguments[0].prototype;
			methods = arguments[1];
		}

		// Copy the passed in methods
		Utils.extend(klass.prototype, methods);

		// Set the constructor
		klass.prototype.constructor = klass;

		// If there's no construct method, set an empty one
		if (!klass.prototype.construct)
			klass.prototype.construct = function(){};

		return klass;
	}
};

module.exports = Klass;