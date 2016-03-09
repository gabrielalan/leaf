'use strict';

var knex = require('../../db/Knex'),
	imageUtils = require('../../utils/images'),
	fspath = require('path'),
	fs = require('fs');

module.exports = {

	removeUnusedImages() {
		let base = 'front/', path = 'img/uploads';

		return knex.select('path').from('images').then(results => {
			let paths = results.map(image => image.path);

			let files = fs.readdirSync(base + path).map(names => path + '/' + names);

			let filtered = files.filter(name => paths.indexOf(name) < 0);

			console.log(filtered);

			filtered.forEach(current => imageUtils.remove(fspath.join(base, current)));
		});
	}
};