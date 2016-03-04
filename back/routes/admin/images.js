'use strict';

var express = require('express'),
	Jimp = require('jimp'),
	fs = require('fs'),
	router = express.Router(),
	multer = require('multer'),
	upload = multer({ dest: 'front/img/uploads' }),
	EntityManager = require('../../models/entities/Manager'),
	Entity = require('../../models/entities/Image');

var PRODUCTS_SIZES = [
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
	}*/
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

function getImageProportions(size, image) {
	let width = image.bitmap.width, height = image.bitmap.height;

	let sizeIsVertical = size.width <= size.height,
		imageIsVertical = width <= height,
		widthRatio = size.width / width,
		heighthRatio = size.height / height,
		ratio = Math.min(widthRatio, heighthRatio),
		newWidth = width * ratio,
		newHeight = height * ratio;

	let useWidth = (newHeight > size.height) || (newWidth < size.width);

	return {
		width: useWidth ? size.width : Jimp.AUTO,
		height: !useWidth ? size.height : Jimp.AUTO,
		x: useWidth ? 0 : Math.floor((((size.height / height) * width) - size.width ) / 2),
		y: !useWidth ? 0 : Math.floor((((size.width / width) * height) - size.height ) / 2)
	};
}

function getExtension(name) {
	return name.split('.').slice(-1);
}

function saveImages(promises, res) {
	let defer = Promise.defer();

	Promise.all(promises).then((files) => {
		let manager = new EntityManager();

		files.forEach((file) => {
			let entity = new Entity();

			entity.override(file);

			manager.persist(entity);
		});

		manager.flush().then((results) => {
			defer.resolve(results);
		}).catch((err) => {
			defer.reject(err);
		});
	}).catch((err) => {
		defer.reject(err);
	});

	return defer.promise;
}

function normalizeName(file, prefix) {
	let name = (prefix || '') + file.filename + '.' + getExtension(file.originalname);

	return [file.destination, name].join('/');
}

function getFrontPath(path) {
	return path.replace(/front\/?/, '');
}

function manipulateCategoryFiles(files) {
	return files.map((file) => {
		return rename(file.path, normalizeName(file), (path) => {
			return { path, sizename: 'CATEGORY', name: file.filename };
		});
	});
}

function manipulateProductFiles(files) {
	let promises = [];

	files.map((file) => {
		PRODUCTS_SIZES.forEach((size) => {
			promises.push(saveImageSize(size, file));
		});
	});

	return promises;
}

function saveImageSize(size, file) {
	let defer = Promise.defer(), name = normalizeName(file, size.name + '_');

	Jimp.read(file.path).then(function (image) {

		let proportions = getImageProportions(size, image);

		image.resize(proportions.width, proportions.height)
			.crop(proportions.x, proportions.y, size.width, size.height)
			.quality(70)
			.write(name);

		defer.resolve({
			name: file.filename,
			path: getFrontPath(name),
			sizename: size.name
		});
	}).catch(function (err) {
		console.error(err);

		defer.reject(err);
	});

	return defer.promise;
}

function mountProductResponse(results) {
	let cache = {}, real = [];

	results.forEach(current => {
		if (!cache[current.name]) {
			cache[current.name] = {
				id: current.id,
				images: [current.id],
				path: current.path
			}
		} else {
			cache[current.name].images.push(current.id);
		}
	});

	for (var index in cache)
		real.push(cache[index]);

	return real;
}

router.post('/products', upload.any(), (req, res, next) => {
	let files = req.files;

	if (!files.length)
		return res.send({ data: [] });

	saveImages(manipulateProductFiles(files)).then((results) => {
		files.forEach(current => remove(current.path));

		res.send({
			data: mountProductResponse(results)
		});
	}).catch((err) => {
		res.status(500).send({
			message: 'Um erro ocorreu ao enviar a imagem, por favor tente mais tarde!',
			error: err
		});
	});
});

router.post('/categories', upload.any(), (req, res, next) => {
	let files = req.files;

	if (!files.length)
		return res.send({ data: [] });

	saveImages(manipulateCategoryFiles(files)).then((results) => {
		res.send({
			data: results
		});
	}).catch((err) => {
		res.status(500).send({
			message: 'Um erro ocorreu ao enviar a imagem, por favor tente mais tarde!',
			error: err
		});
	});;
});

module.exports = router;