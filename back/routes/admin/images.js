'use strict';

var express = require('express'),
	Jimp = require('jimp'),
	fs = require('fs'),
	router = express.Router(),
	multer = require('multer'),
	upload = multer({ dest: 'front/img/uploads' }),
	store = require('../../models/store/Categories'),
	EntityManager = require('../../models/entities/Manager'),
	Entity = require('../../models/entities/Image');

var PRODUCTS_SIZES = [
	{
		name: 'PRODUCT_BIGGER',
		width: 670,
		height: 570
	}/*,
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
		width: Jimp.AUTO,
		height: 290
	},
	{
		name: 'PRODUCT_CAROUSEL_V',
		width: 150,
		height: 240
	},
	{
		name: 'PRODUCT_CAROUSEL_H',
		width: 370,
		height: 200
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
	}*/
];

function rename(oldPath, newPath, processPath) {
	let deferred = Promise.defer();

	fs.rename(oldPath, newPath, (err) => {
		if (err)
			deferred.reject(err);

		deferred.resolve(processPath(newPath.replace('front/', '')));
	});

	return deferred.promise;
}

function getExtension(name) {
	return name.split('.').slice(-1);
}

function saveImages(files, res) {
	Promise.all(files).then((files) => {
		let manager = new EntityManager();

		files.forEach((file) => {
			let entity = new Entity();

			entity.override(file);

			manager.persist(entity);
		});

		manager.flush().then((results) => {
			res.send({
				data: results
			});
		}).catch((err) => {
			res.status(500).send({
				message: 'Um erro ocorreu ao enviar a imagem, por favor tenta mais tarde!',
				error: err
			});
		});
	}).catch((err) => {
		res.status(500).send({
			message: 'Um erro ocorreu ao enviar a imagem, por favor tenta mais tarde!',
			error: err
		});
	});
}

function normalizeName(file) {
	let name = file.filename + '.' + getExtension(file.originalname);

	return [file.destination, name].join('/');
}

function manipulateCategoryFiles(files) {
	return files.map((file) => {
		return rename(file.path, normalizeName(file), (path) => {
			return { path, sizename: 'CATEGORY' };
		});
	});
}

function manipulateProductFiles(files) {
	let promises = [];

	return files.map((file) => {
		PRODUCTS_SIZES.forEach((size) => {
			promises.push(saveImageSize(size, file));
		});
	});

	return promises;
}

function saveImageSize(size, file) {
	let defer = Promise.defer(), name = size.name + '_' + normalizeName(file);

	Jimp.read(file.path).then(function (lenna) {
		lenna.resize(256, 256)
			.quality(60)
			.greyscale()
			.write(name);

		defer.resolve({
			path: name,
			sizename: size.name
		});
	}).catch(function (err) {
		console.error(err);

		defer.reject(err);
	});

	return defer.promise;
}

router.post('/products', upload.any(), (req, res, next) => {
	let files = req.files;

	if (!files.length)
		return res.send({ data: [] });

	saveImages(manipulateProductFiles(files), res);
});

router.post('/categories', upload.any(), (req, res, next) => {
	let files = req.files;

	if (!files.length)
		return res.send({ data: [] });

	saveImages(manipulateCategoryFiles(files), res);
});

module.exports = router;