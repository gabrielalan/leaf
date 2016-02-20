'use strict';

var React = require('react'),
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
			url: '/admin/rest/images',
			method: 'POST',
			data: this.makeData(files),
			processData: false,
			contentType: false,
			complete: this.handleSavedImages
		});
	},

	onDrop: function (files) {
		this.setState({ sending: true });

		this.upload(files);
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

	render: function () {
		return React.createElement(
			'div',
			{ className: 'image-uploader' },
			React.createElement(
				'div',
				{ className: 'loaded-images' },
				React.createElement(
					'span',
					{ className: 'legend' },
					'Imagens carregadas'
				),
				this.createImages()
			),
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