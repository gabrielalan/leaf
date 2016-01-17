'use strict';

class Memory {
	constructor(storer) {
		this.data = {};

		this.defaultTtl = 60 * 1000; //1 minute
	}

	has(key) {
		return typeof this.data[key] !== 'undefined';
	}

	checkTimeout(key) {
		if( !this.has(key) )
			return false;

		let data = this.data[key];

		return Date.now() <= data.timeout;
	}

	get(key) {
		if( !this.checkTimeout(key) )
			return false;

		return this.data[key].value;
	}

	set(key, value, ttl) {

		let timeout = Date.now() + (ttl || this.defaultTtl);

		this.data[key] = { value, timeout };
	}

	remove(key) {
		return delete this.data[key];
	}
}

module.exports = Memory;