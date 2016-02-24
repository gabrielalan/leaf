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

module.exports = router;