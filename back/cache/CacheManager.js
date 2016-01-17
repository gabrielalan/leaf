'use strict';

var MemoryStorer = require('./storer/Memory');

class CacheManager {
	constructor(storer) {
		this.storer = storer;
	}

	has(key) {
		return this.storer.checkTimeout(key);
	}

	get(key) {
		return this.storer.get(key);
	}

	set(key, value, ttl) {
		return this.storer.set(key, value, ttl);
	}

	remove(key) {
		return this.storer.remove(key);
	}
}

module.exports = CacheManager;