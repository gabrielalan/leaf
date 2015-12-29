'use strict';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../front')));

app.use('/', require('./routes/site'));
app.use('/categories', require('./routes/categories'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
	//@TODO save in a file
	//console.log(err);

	/* istanbul ignore next */
	res.status(err.status || 500);
	res.json({
		success: false,
		message: err.message
	});
});


module.exports = app;