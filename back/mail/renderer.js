'use strict';

const handlebars = require('handlebars'), fs = require('fs');

var cache = {};

function getCachedContent(template) {
	var deferred = Promise.defer();

	if (template in cache) {
		deferred.resolve(cache[template]);

		return deferred.promise;
	}

	fs.readFile(template, "utf-8", (err, data) => {
		if (err)
			return deferred.reject(err);

		cache[template] = data;

		return deferred.resolve(cache[template]);
	});

	return deferred.promise;
}

function compile(template){
	let deferred = Promise.defer();

	getCachedContent(template)
		.then(data => deferred.resolve(handlebars.compile(data)))
		.catch(err => deferred.reject(err));

	return deferred.promise;
}

module.exports = (template) => (context, callback) => {
	return compile(template)
		.then(compiled => {
			const email = compiled(context);

			callback(null, { html: email, text: email });
		})
		.catch(error => callback(error));
};