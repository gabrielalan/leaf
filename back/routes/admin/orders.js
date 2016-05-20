'use strict';

var express = require('express'),
	logger = require('../../logger/Logger'),
	router = express.Router(),
	store = require('../../models/store/Orders');

const error = (res) => (err) => {
	logger.log('error', err);

	res.status(500).send(err.message);
};

router.get('/', (req, res, next) => {
	store.getGrid().then((results) => {
		res.send(results);
	}).catch(error(res));
});

router.get('/:id/items', (req, res, next) => {
	store.getItems(req.params.id).then((results) => {
		res.send(results);
	}).catch(error(res));
});

router.get('/:id/status/:status', (req, res, next) => {
	store.changeStatus(req.params.id, Number(req.params.status)).then((results) => {
		res.send(results);
	}).catch(error(res));
});

module.exports = router;