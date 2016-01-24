'use strict';

var API = require('./PagSeguro');

class Mediator {

	checkout(data) {
		return API.checkout(data);
	}

	notification(data) {
		return API.notification(data);
	}
}

module.exports = new Mediator();