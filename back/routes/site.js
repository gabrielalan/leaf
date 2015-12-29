'use strict';

var express = require('express'),
	router = express.Router(),
	handlebars = require('handlebars'),
	fs = require('fs');

router.get('/', (req, res, next) => {
	fs.readFile('back/views/index.html', 'utf-8', function(error, source){
		if( error ) {
			res.send(error);
			return false;
		}

		var template = handlebars.compile(source);
		var html = template();

		res.send(html);
	});
});

module.exports = router;