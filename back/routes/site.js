'use strict';

var express = require('express'),
	router = express.Router(),
	SiteController = require('../controllers/site/Site');

var controller = new SiteController();

router.get('/', (req, res, next) => {
	controller.getAction('home')(req, res, next);
});

router.get('/search', (req, res, next) => {
	controller.getAction('search')(req, res, next);
});

router.get('/category/:id', (req, res, next) => {
	controller.getAction('category')(req, res, next);
});

router.get('/product/:id', (req, res, next) => {
	controller.getAction('product')(req, res, next);
});

router.get('/cart', (req, res, next) => {
	controller.getAction('cart')(req, res, next);
});

router.get('/success', (req, res, next) => {
	controller.getAction('success')(req, res, next);
});

module.exports = router;