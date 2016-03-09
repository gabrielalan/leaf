'use strict';

let imageJob = require('./images'),
	logger = require('../logger/Logger');

function register(job, delay) {
	let call = () => {
		return job().then(result => {
			if (typeof result === 'boolean' && result === false)
				return false;

			return setTimeout(call, delay);
		}).catch(error => logger.log('error', error));
	};

	return call();
}

register(imageJob.method, imageJob.delay);

module.exports = {
	register: register
};