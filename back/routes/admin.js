'use strict';

var express = require('express'),
	router = express.Router(),
	Validator = require('../session/Validator'),
	Authenticator = require('../session/Authenticator'),
	authValidator = new Validator(),
	loginTemplate = require('../templates/admin/login');

router.post('/login', (req, res, next) => {
	authValidator.setRequest(req);
	authValidator.setResponse(res);

	if (authValidator.isValid()) {
		return next();
	}

	authValidator.createSession(new Authenticator(req)).then(() => {
		res.sendStatus(200);
	}).catch((err) => {
		res.status(403).send(err.message);
	});
});

router.post('/logout', (req, res, next) => {
	req.session.destroy();

	res.sendStatus(200);
});

router.use((req, res, next) => {
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

router.use('/rest/categories', require('./admin/categories'));
router.use('/rest/images', require('./admin/images'));

module.exports = router;