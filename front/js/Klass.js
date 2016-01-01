'use strict';

var Utils = require('Common/Utils');

var Klass = {
	create: function() {
		var methods = arguments.length >= 2 ? arguments[1] : arguments[0], 
			name = methods.name || 'noNameKlass',
			klass = Function('return function ' + name + '() { this.construct.apply(this, arguments); }')();

		klass.extends = Klass.create.bind(undefined, klass);

		if( arguments.length >= 2 ) {
			klass.prototype = Object.create(arguments[0].prototype);
			klass.prototype.parent = Object.create(arguments[0].prototype);
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
window.Klass = Klass;
window.Utils = Utils;
module.exports = Klass;