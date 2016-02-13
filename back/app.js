'use strict';

require('./GeneralConfiguration');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var middlewares = require('./middlewares');
var routes = require('./routes');
var session = require('express-session');
//var LeafStore = require('./session/Store');
var KnexSessionStore = require('connect-session-knex')(session);
var Knex = require('./db/Knex');

var app = express();

var sessionCfg = {
	store: new KnexSessionStore({ knex: Knex }),
	secret: 'fi49fm2490twg90rgm309wekdfwth29403iw',
	saveUninitialized: false,
	name: 'fo40rfm0e30e39dirf9r0kkd94igk0',
	resave: false,
	unset: 'destroy',
	cookie: { maxAge: 60 * 60 * 1000 } //one hour
};

app.use(session(sessionCfg));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../front')));

app.use(middlewares.setDefaultHeaders);

for (var path in routes) {
	app.use(path, routes[path]);
}

// catch 404 and forward to error handler
app.use(middlewares.error404);

// production error handler
// no stacktraces leaked to user
app.use(middlewares.errorHandler);

module.exports = app;