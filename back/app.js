'use strict';

require('./GeneralConfiguration');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var middlewares = require('./middlewares');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../front')));

app.use(middlewares.setDefaultHeaders);
app.use(middlewares.handleAuthorization);

app.use('/', require('./routes/site'));

// rest routes
app.use('/rest/categories', require('./routes/categories'));
app.use('/rest/locations', require('./routes/locations'));
app.use('/rest/payment', require('./routes/payment'));
app.use('/rest/cart', require('./routes/cart'));

// catch 404 and forward to error handler
app.use(middlewares.error404);

// production error handler
// no stacktraces leaked to user
app.use(middlewares.errorHandler);

module.exports = app;