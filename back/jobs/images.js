'use strict';

let store = require('../models/store/Images');

function removeUnusedImages() {
	return store.removeUnusedImages();
}

module.exports = {
	method: removeUnusedImages,
	delay: 1000 * 60 * 10
};