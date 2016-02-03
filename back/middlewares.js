'use strict';

module.exports = {

	setDefaultHeaders(req, res, next) {
		res.setHeader("Access-Control-Allow-Origin", "https://sandbox.pagseguro.uol.com.br");
		res.setHeader("Cache-Control", "no-cache");
		res.setHeader("Pragma", "no-cache");
		return next();
	},

	handleAuthorization(req, res, next) {
		//res.end();
		return next();
	},

	error404(req, res, next) {
		var template = require('./templates/error');

		res
			.status(404)
			.send(template({
				success: false,
				title: 'Página não encontrada',
				message: 'A página que você está procurando, não pode ser encontrada.'
			}));
	},

	errorHandler(err, req, res) {
		//@TODO save in a file
		//console.log(err);

		/* istanbul ignore next */
		res.status(err.status || 500);
		res.json({
			success: false,
			message: err.message
		});
	}
};