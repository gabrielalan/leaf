'use strict';

var API = require('./PagSeguro'),
	TransactionData = require('./pagseguro/TransactionData');

class Mediator {

	checkout(data) {
		return API.checkout(data);
	}

	notification(data) {
		return API.notification(data);
	}

	transaction(data) {
		return API.transaction(data);
	}

	getConfig() {
		return API.getConfiguration();
	}

	getTransactionObject(data) {
		return new TransactionData(data);
	}
}

module.exports = new Mediator();