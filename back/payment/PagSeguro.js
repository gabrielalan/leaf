'use strict';

var https = require('https');
var xml2js = require('xml2js');
var builder = new xml2js.Builder();
var parser = xml2js.parseString;
var config = require('./pagseguro/Config');

class PagSeguro {

	getConfiguration() {
		return config;
	}

	checkout(data) {
		let postData = builder.buildObject(data),
			options = config.getCheckoutOptions();

		options.headers['Content-Length'] = postData.length;

		return this.doRequest(options, postData);
	}

	notification(oid) {
		let defer = Promise.defer(), options = config.getNotificationOptions(oid);

		this.doRequest(options, '')
			.then((xml) => {
				defer.resolve(xml);
			})
			.catch((err) => {
				defer.reject(err);
			});

		return defer.promise;
	}

	doRequest(options, data) {
		let defer = Promise.defer();

		let req = https.request(options, (res) => {
			// console.log('STATUS: ' + res.statusCode);
			//console.log('HEADERS: ' + JSON.stringify(res.headers));

			res.setEncoding('utf8');

			res.on('data', function (chunk) {
				parser(chunk, (err, result) => {
					if (err)
						defer.reject(err);

					defer.resolve(result);
				});
			});
		});

		req.on('error', function(e) {
			defer.reject('problem with request: ' + e.message);
		});

		req.write(data);
		req.end();

		return defer.promise;
	}
}

module.exports = new PagSeguro();