'use strict';

var express = require('express'),
	router = express.Router(),
	SiteController = require('../controllers/site/Site');

var controller = new SiteController();

router.get('/', (req, res, next) => {
	controller.getAction('home')(req, res);
});

router.get('/search', (req, res, next) => {
	controller.getAction('search')(req, res);
});

module.exports = router;