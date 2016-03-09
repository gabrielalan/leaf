'use strict';

let fs = require('fs');

let PRODUCTS_SIZES = [
	{
		name: 'PRODUCT_CAROUSEL_H',
		width: 370,
		height: 200
	},
	{
		name: 'PRODUCT_MEDIUM_V',
		width: 270,
		height: 290
	},
	{
		name: 'PRODUCT_BIGGER',
		width: 670,
		height: 570
	},
	 {
		 name: 'PRODUCT_BIG',
		 width: 494,
		 height: 320
	 },
	 {
		 name: 'PRODUCT_MEDIUM',
		 width: 494,
		 height: 245
	 },
	 {
		 name: 'PRODUCT_MEDIUM_V',
		 width: 270,
		 height: 290
	 },
	 {
		 name: 'PRODUCT_CAROUSEL_V',
		 width: 150,
		 height: 240
	 },
	 {
		 name: 'PRODUCT_VIEW',
		 width: 370,
		 height: 315
	 },
	 {
		 name: 'PRODUCT_SMALLEST',
		 width: 70,
		 height: 110
	 }
];

function remove(filename) {
	let tempFile = fs.openSync(filename, 'r');
	fs.closeSync(tempFile);
	fs.unlinkSync(filename);
}

function rename(oldPath, newPath, processPath) {
	let deferred = Promise.defer();

	fs.rename(oldPath, newPath, (err) => {
		if (err)
			deferred.reject(err);

		deferred.resolve(processPath(newPath.replace('front/', '')));
	});

	return deferred.promise;
}

module.exports = {
	PRODUCTS_SIZES,
	remove,
	rename
};