'use strict';

var express = require('express');
var router = express.Router();
// var Terms = require('../models/Terms');

// var model = new Terms();

router.get('/', (req, res, next) => {

	res.json([
		{'id': 'di82jew98ejd92', name: 'Santa Catarina', value: 'sc'},
		{'id': 'r848jj83ww3939', name: 'São Paulo', value: 'sp'}
	]);
});

module.exports = router;