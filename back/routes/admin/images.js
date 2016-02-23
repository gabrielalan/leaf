'use strict';

var express = require('express'),
	fs = require('fs'),
	router = express.Router(),
	multer = require('multer'),
	upload = multer({ dest: 'front/img/uploads' }),
	store = require('../../models/store/Categories'),
	EntityManager = require('../../models/entities/Manager'),
	Entity = require('../../models/entities/Image');

function rename(oldPath, newPath) {
	let deferred = Promise.defer();

	fs.rename(oldPath, newPath, (err) => {
		if (err)
			deferred.reject(err);

		deferred.resolve(newPath.replace('front/', ''));
	});

	return deferred.promise;
}

function getExtension(name) {
	return name.split('.').slice(-1);
}

router.post('/categories', upload.any(), (req, res, next) => {

	let files = req.files;

	if (!files.length)
		return res.send({ data: [] });

	let promises = files.map((file) => {
		let name = file.filename + '.' + getExtension(file.originalname);

		let newPath = [file.destination, name].join('/');

		return rename(file.path, newPath);
	});

	Promise.all(promises).then((files) => {
		let manager = new EntityManager();

		files.forEach((file) => {
			let entity = new Entity();

			entity.override({
				path: file,
				sizename: 'CATEGORY'
			});

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
});

module.exports = router;