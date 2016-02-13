'use strict';

var express = require('express'),
	router = express.Router(),
	CategoryEntity = require('../../models/entities/Category');

router.get('/', (req, res, next) => {
	let store = require('../../models/store/Categories');

	store.getAllCategories().then((results) => {
		res.send(results);
	}).catch((err) => {
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
		let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		if (err.code === 'ER_ROW_IS_REFERENCED_2')
			message = 'Esta categoria é referenciada em outra categoria. Por favor apague primeiro os registros filhos.';

		res.status(500).send(message);
	});
});

module.exports = router;