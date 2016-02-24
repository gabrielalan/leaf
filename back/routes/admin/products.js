'use strict';

var express = require('express'),
	router = express.Router(),
	store = require('../../models/store/Products').admin/*,
	CategoryEntity = require('../../models/entities/Product')*/;

router.get('/', (req, res, next) => {
	store.getAllProducts().then((results) => {
		res.send(results);
	}).catch((err) => {
		res.status(500).send(err.message);
	});
});

router.get('/:id', (req, res, next) => {
	store.getProduct(req.params.id).then((results) => {
		res.send(results[0] || {});
	}).catch((err) => {
		res.send({});
	});
});

module.exports = router;