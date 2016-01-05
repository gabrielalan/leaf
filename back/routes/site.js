'use strict';

var express = require('express'),
	router = express.Router(),
	index = require('../templates/index');

router.get('/', (req, res, next) => {
	var html = index();

	res.send(html);
});

module.exports = router;