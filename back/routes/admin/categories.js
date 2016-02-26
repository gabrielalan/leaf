'use strict';

var express = require('express'),
	logger = require('../../logger/Logger'),
	router = express.Router(),
	store = require('../../models/store/Categories'),
	CategoryEntity = require('../../models/entities/Category');

router.get('/', (req, res, next) => {
	store.getAllCategories().then((results) => {
		res.send(results);
	}).catch((err) => {
		logger.log('error', err);

		res.status(500).send(err.message);
	});
});

router.post('/', (req, res, next) => {
	let data = req.body,
		entity = new CategoryEntity();

	entity.override({
		name: data.name,
		description: data.description,
		image_id: data.image_id
	});

	if (data.category_id !== '' && data.category_id !== null && data.category_id)
		entity.set('category_id', data.category_id);

	entity.insert().then(() => {
		res.send(entity.getAllData());
	}).catch((err) => {
		logger.log('error', err);

		let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		res.status(500).send(message);
	});
});

router.get('/:id', (req, res, next) => {
	store.getCategory(req.params.id).then((results) => {
		res.send(results[0] || {});
	}).catch((err) => {
		logger.log('error', err);

		res.send({});
	});
});

router.put('/:id', (req, res, next) => {
	let entity = new CategoryEntity(),
		data = req.body;

	entity.override({
		id: data.id,
		name: data.name,
		description: data.description,
		image_id: data.image_id
	});

	if (data.category_id !== '' && data.category_id !== null && data.category_id)
		entity.set('category_id', data.category_id);

	entity.save().then(() => {
		res.send({});
	}).catch((err) => {
		logger.log('error', err);

		let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		res.status(500).send(message);
	});
});

router.delete('/:id', (req, res, next) => {
	let entity = new CategoryEntity();

	entity.set('id', req.params.id);

	entity.delete().then(() => {
		res.send({});
	}).catch((err) => {
		logger.log('error', err);

		let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		if (err.code === 'ER_ROW_IS_REFERENCED_2')
			message = 'Esta categoria é referenciada em outra categoria. Por favor apague primeiro os registros filhos.';

		res.status(500).send(message);
	});
});

module.exports = router;