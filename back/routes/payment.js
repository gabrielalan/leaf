'use strict';

var express = require('express'),
	router = express.Router(),
	Controller = require('../controllers/site/Payment');

var controller = new Controller();

router.get('/checkout', (req, res, next) => {
	controller.getAction('checkout')(req, res);
});

router.post('/notification', (req, res, next) => {
	controller.getAction('notification')(req, res);
});

router.get('/redirect', (req, res, next) => {
	controller.getAction('redirect')(req, res);
});

module.exports = router;