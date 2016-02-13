'use strict';

var Observer = require('Common/Observer');

var MessageBarCentral = Observer.extends({

	name: 'MessageBarCentral',

	message: '',

	setMessage: function(message) {
		this.message = message;

		this.trigger('change');
	}
});

module.exports = new MessageBarCentral();