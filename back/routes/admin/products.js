'use strict';

var express = require('express'),
	router = express.Router(),
	store = require('../../models/store/Products').admin,
	Entity = require('../../models/entities/Product');

router.post('/', (req, res, next) => {
	let data = req.body,
		entity = new Entity();

	entity.override({
		name: data.name,
		description: data.description,
		quantity: data.quantity,
		value: data.value,
		highlight: data.highlight,
		category_id: data.category_id
	});

	entity.insert().then(() => {
		res.send(entity.getAllData());
	}).catch((err) => {
		let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		res.status(500).send(message);
	});
});

router.put('/:id', (req, res, next) => {
	let entity = new Entity(),
		data = req.body;

	entity.override({
		id: data.id,
		name: data.name,
		description: data.description,
		quantity: data.quantity,
		value: data.value,
		highlight: data.highlight,
		category_id: data.category_id
	});

	entity.save().then(() => {
		res.send({});
	}).catch((err) => {
		let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		res.status(500).send(message);
	});
});

router.get('/', (req, res, next) => {
	store.getAllProducts().then((results) => {
		res.send(results);
	}).catch((err) => {
		res.status(500).send(err.message);
	});
});

router.get('/:id', (req, res, next) => {
	store.getProduct(req.params.id).then((results) => {
		res.send(results[0] || {});
	}).catch((err) => {
		res.send({});
	});
});

router.delete('/:id', (req, res, next) => {
	let entity = new Entity();

	entity.set('id', req.params.id);

	entity.delete().then(() => {
		res.send({});
	}).catch((err) => {
		let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

		res.status(500).send(message);
	});
});

module.exports = router;