'use strict';

var routes = {
	"/": require('./routes/site'),
	"/admin": require('./routes/admin'),

	// rest routes
	"/rest/categories": require('./routes/categories'),
	"/rest/locations": require('./routes/locations'),
	"/rest/payment": require('./routes/payment'),
	"/rest/cart": require('./routes/cart')
};

module.exports = routes;