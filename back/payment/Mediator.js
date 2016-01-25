'use strict';

var API = require('./PagSeguro');

class Mediator {

	checkout(data) {
		return API.checkout(data);
	}

	notification(data) {
		return API.notification(data);
	}

	getConfig() {
		return API.getConfiguration();
	}
}

module.exports = new Mediator();