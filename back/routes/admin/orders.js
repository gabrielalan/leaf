'use strict';

var express = require('express'),
	logger = require('../../logger/Logger'),
	router = express.Router(),
	store = require('../../models/store/Orders');

router.get('/', (req, res, next) => {
	store.getGrid().then((results) => {
		res.send(results);
	}).catch((err) => {
		logger.log('error', err);

		res.status(500).send(err.message);
	});
});

router.get('/:id/items', (req, res, next) => {
	store.getItems(req.params.id).then((results) => {
		res.send(results);
	}).catch((err) => {
		logger.log('error', err);

		res.status(500).send(err.message);
	});
});

module.exports = router;