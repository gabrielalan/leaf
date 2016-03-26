'use strict';

const logger = require('./Logger');

module.exports = {

	defaultHttpResponseError(res, err, msg) {
		logger.log('error', err);

		let message = msg || 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		res.status(500).send(message);
	}
};