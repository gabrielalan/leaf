'use strict';

var express = require('express'),
	logger = require('../../logger/Logger'),
	router = express.Router(),
	store = require('../../models/store/Products').admin,
	EntityManager = require('../../models/entities/Manager'),
	Entity = require('../../models/entities/Product'),
	ImageEntity = require('../../models/entities/ProductImage');

function error(res, err) {
	logger.log('error', err);

	let message = 'Desculpe, ocorreu um erro na aplicação, tente novamente mais tarde.';

	res.status(500).send(message);
}

function saveImages(product_id, image_ids) {
	let manager = new EntityManager(), entities = image_ids.map(image_id => {
		let entity = new ImageEntity();

		entity.override({ product_id, image_id });

		return entity;
	});

	manager.persistAll(entities);

	return manager.flush();
}

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
	}).catch(err => error(res, err));
});

router.put('/:id', (req, res, next) => {
	let entity = new Entity(),
		data = req.body,
		dataImages = data.images || [],
		images = dataImages.reduce((a, b) => a.concat(b));

	entity.override({
		id: data.id,
		name: data.name,
		description: data.description,
		quantity: data.quantity,
		value: data.value,
		highlight: data.highlight,
		category_id: data.category_id
	});

	store.removeAllImages(data.id).then(() => {
		Promise.all([entity.save(), saveImages(data.id, images)]).then(() => {
			res.send(entity.getAllData());
		}).catch(err => error(res, err));
	}).catch(err => error(res, err));
});

router.get('/', (req, res, next) => {
	store.getAllProducts().then((results) => {
		res.send(results);
	}).catch(err => error(res, err));
});

router.get('/:id', (req, res, next) => {
	store.getProduct(req.params.id).then((results) => {
		res.send(results[0] || {});
	}).catch(err => error(res, err));
});

router.delete('/:id', (req, res, next) => {
	let entity = new Entity();

	entity.set('id', req.params.id);

	entity.delete().then(() => {
		res.send({});
	}).catch(err => error(res, err));
});

module.exports = router;