'use strict';

var express = require('express'),
	router = express.Router(),
	multer = require('multer'),
	upload = multer({ dest: 'front/img/uploads' }),
	store = require('../../models/store/Categories'),
	CategoryEntity = require('../../models/entities/Category');

router.post('/', upload.any(), (req, res, next) => {
	res.send({
		data: [{
			id: 1,
			path: '/img/graos.jpg'
		}]
	})
});

module.exports = router;