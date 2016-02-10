'use strict';

var express = require('express'),
	router = express.Router(),
	Authenticator = require('../session/Authenticator'),
	authValidator = new Authenticator(),
	loginTemplate = require('../templates/admin/login');

router.get('/', (req, res, next) => {
	authValidator.setRequest(req);
	authValidator.setResponse(res);

	if (!authValidator.isValid()) {
		res.send(loginTemplate());
		return res.end();
	}

	return next();
});

router.get('/', (req, res, next) => {
	let template = require('../templates/admin/index');

	res.send(template());
});

module.exports = router;