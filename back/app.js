'use strict';

require('./GeneralConfiguration');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../front')));

// set default headers
app.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "https://sandbox.pagseguro.uol.com.br");
 	return next();
});

app.use('/', require('./routes/site'));

// rest routes
app.use('/rest/categories', require('./routes/categories'));
app.use('/rest/locations', require('./routes/locations'));
app.use('/rest/payment', require('./routes/payment'));
app.use('/rest/cart', require('./routes/cart'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var template = require('./templates/error');

	res
		.status(404)
		.send(template({
			success: false,
			title: 'Página não encontrada',
			message: 'A página que você está procurando, não pode ser encontrada.'
		}));
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