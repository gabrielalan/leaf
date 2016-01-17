'use strict';

var MemoryStorer = require('./storer/Memory'),
	CacheManager = require('./CacheManager');

module.exports = new CacheManager(new MemoryStorer());