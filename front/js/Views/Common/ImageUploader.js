'use strict';

var React = require('react'),
    _ = require('underscore'),
    MessageBarCentral = require('Widgets/MessageBarCentral'),
    Dropzone = require('Views/Common/Dropzone'),
    Image = require('Views/Common/ImageUploader/Image'),
    Loading = require('Views/Common/Loading');

var ImageUploader = React.createClass({
	displayName: 'ImageUploader',

	getInitialState: function () {
		return {
			sending: false,
			images: []
		};
	},

	setValue: function (images) {
		this.setState({
			images: images
		});
	},

	getValue: function () {
		return this.state.images;
	},

	handleSavedImages: function (response) {
		this.setState({
			sending: false,
			images: response.responseJSON.data
		});
	},

	makeData: function (files) {
		var data = new FormData();

		files.forEach(function (file) {
			data.append('image', file);
		});

		return data;
	},

	upload: function (files) {
		$.ajax({
			url: this.props.url,
			method: 'POST',
			data: files,
			processData: false,
			contentType: false,
			complete: this.handleSavedImages
		});
	},

	verifyLimit: function (files) {
		var limit = this.props.limit || 0,
		    current = this.state.images.length;

		if (limit === 0 || limit <= current) throw new Error('Você já atingiu o limite de imagens enviadas: ' + limit);

		return files;
	},

	onDrop: function (files) {
		this.setState({ sending: true });

		var processFiles = _.compose(this.upload, this.makeData, this.verifyLimit);

		try {
			processFiles(files);
		} catch (err) {
			this.setState({ sending: false });

			MessageBarCentral.setMessage(err.message);
		}
	},

	onImageClick: function () {
		debugger;
	},

	createImages: function () {
		var me = this;

		return this.state.images.map(function (image) {
			return React.createElement(Image, { key: image.id, path: image.path, onClick: me.onImageClick });
		});
	},

	createLoadedImages: function () {
		var images = this.createImages();

		if (!images.length) return false;

		return React.createElement(
			'div',
			{ className: 'loaded-images' },
			React.createElement(
				'span',
				{ className: 'legend' },
				'Imagens carregadas'
			),
			images
		);
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'image-uploader' },
			this.createLoadedImages(),
			React.createElement(
				Dropzone,
				{ onDrop: this.onDrop },
				React.createElement(Loading, { loading: this.state.sending }),
				React.createElement(
					'span',
					{ className: 'legend' },
					'Arraste as imagens para cá'
				)
			)
		);
	}
});

module.exports = ImageUploader;