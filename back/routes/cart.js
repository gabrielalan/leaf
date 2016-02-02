'use strict';

var express = require('express'),
	router = express.Router(),
	Controller = require('../controllers/site/Cart');

var controller = new Controller();

router.get('/total', (req, res, next) => {
	controller.getAction('total')(req, res);
});

router.post('/add', (req, res, next) => {
	controller.getAction('add')(req, res);
});

module.exports = router;