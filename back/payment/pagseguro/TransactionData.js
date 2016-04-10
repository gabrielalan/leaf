'use strict';

const frontUtils = require('../../../front/js/Common/Utils');

class TransactionData {
	constructor(data) {
		this.data = data;
	}

	get(key, defaultValue) {
		if (typeof this.data[key] !== 'undefined')
			return this.data[key];

		return defaultValue;
	}

	getGrossAmount() {
		return parseFloat(this.get('grossAmount', [0])[0]);
	}

	getNetAmount() {
		return parseFloat(this.get('netAmount', [0])[0]);
	}

	getCode() {
		return this.get('code', [null])[0];
	}

	getReference() {
		return this.get('reference', [null])[0];
	}

	getShipping() {
		return this.normalizeObject(this.get('shipping', [{}])[0]);
	}

	getStatus() {
		return parseInt(this.get('status', ['1'])[0]);
	}

	getItems() {
		return this.get('items', [{item: []}])[0]	.item.map(current => this.normalizeObject(current) );
	}

	getSender() {
		return this.normalizeObject(this.get('sender', [null])[0]);
	}

	normalizeObject(realObj) {
		let obj = Object.assign({}, realObj);

		for( let index in obj ) {
			let child = obj[index][0];

			if (frontUtils.is(child, 'object')) {
				obj[index] = this.normalizeObject(child);
				continue;
			}

			obj[index] = child;
		}

		return obj;
	}
}

module.exports = TransactionData;