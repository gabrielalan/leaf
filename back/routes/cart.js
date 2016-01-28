'use strict';

var express = require('express'),
	router = express.Router(),
	Controller = require('../controllers/site/Cart');

var controller = new Controller();

router.get('/total', (req, res, next) => {
	controller.getAction('total')(req, res);
});

module.exports = router;