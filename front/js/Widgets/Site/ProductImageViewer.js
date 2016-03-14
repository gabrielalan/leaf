'use strict';

var Klass = require('Klass'),
	Loading = require('Widgets/Loading');

var ProductImageViewer = Klass.create({

	name: 'ProductImageViewer',

	images: null,

	bigger: null,

	construct: function(images, big) {
		this.cache = {};
		this.images = $(images);
		this.bigger = $(big);

		this.initLoading();

		this.bindEvents();
	},

	initLoading: function() {
		this.loading = new Loading();

		this.loading.compile();

		this.bigger.append(this.loading.compiled);
	},

	bindEvents: function() {
		this.images.on('click', this.onClick.bind(this));
	},

	loadImage: function(url) {
		var me = this, image = new Image();

		if (url in this.cache)
			return this.showImage(url);

		image.onload = function() {
			me.cache[url] = true;
			me.showImage(url);
		};

		image.src = url;
	},

	showImage: function(url) {
		var biggerImg = this.bigger.find('img');

		biggerImg.get(0).src = url;

		this.loading.setState(false);
	},

	onClick: function (evt) {
		evt.stopPropagation();
		evt.preventDefault();

		this.loading.setState(true);

		var href = evt.currentTarget.getAttribute('href');

		this.loadImage(href);

		return false;
	}
});

module.exports = ProductImageViewer;