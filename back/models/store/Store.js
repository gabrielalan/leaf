'use strict';

class Store {

	getEntity() {
		if (!this.entity)
			throw new Error('Theres not entity setted on that store');

		return this.entity;
	}

	setEntity(reference) {
		this.entity = reference;
	}
}

module.exports = Store;