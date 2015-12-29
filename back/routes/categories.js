'use strict';

var express = require('express');
var router = express.Router();
// var Terms = require('../models/Terms');

// var model = new Terms();

router.get('/', (req, res, next) => {

	res.json({});

	/*var filter = {};

	if( req.params.term ) {
		filter.pt_br = req.params.term;
	}

	model.find(filter)
		.then((terms) => { 
			res.json({ result: terms, success: true }); 
		})
		.catch((err) => { 
			console.log(err); 
			next(); 
		});*/
});

router.post('/', (req, res) => {

	res.json({});

	/*model.insert(req.body)
		.then((result) => { 
			res.json({ result: result, success: true }); 
		})
		.catch((err) => { 
			res.status(500);
			res.json({
				success: false,
				message: err.message
			});
		});*/
});

module.exports = router;