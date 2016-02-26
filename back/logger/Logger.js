'use strict';

let winston = require('winston');

let logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({ json: false, timestamp: true }),
		new winston.transports.File({ filename: 'errors.log', json: false })
	],
	exceptionHandlers: [
		new (winston.transports.Console)({ json: false, timestamp: true }),
		new winston.transports.File({ filename: 'exceptions.log', json: false })
	],
	exitOnError: false
});

module.exports = logger;