'use strict';

var React = require('react'),
    Dropzone = require('Views/Common/Dropzone'),
    Loading = require('Views/Common/Loading');

var ImageUploader = React.createClass({
	displayName: 'ImageUploader',

	getInitialState: function () {
		return {
			sending: false
		};
	},

	handleSavedImages: function () {
		this.setState({ sending: false });
	},

	makeData: function (files) {
		var data = new FormData();

		files.forEach(function (file) {
			data.append(file.name, file);
		});

		return data;
	},

	upload: function (files) {
		$.ajax({
			url: '/admin/rest/upload',
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
				)
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