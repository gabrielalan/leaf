'use strict';

var React = require('react'),
	Dropzone = require('Views/Common/Dropzone'),
	Loading = require('Views/Common/Loading');

var ImageUploader = React.createClass({

	getInitialState: function() {
		return {
			sending: false
		};
	},

	handleSavedImages: function() {
		this.setState({ sending: false });
	},

	makeData: function (files) {
		var data = new FormData();

		files.forEach(function(file){
			data.append(file.name, file);
		});

		return data;
	},

	upload: function(files) {
		$.ajax({
			url: '/admin/rest/upload',
			method: 'POST',
			data: this.makeData(files),
			processData: false,
			contentType: false,
			complete: this.handleSavedImages
		});
	},

	onDrop: function(files) {
		this.setState({ sending: true });

		this.upload(files);
	},

	render: function(){
		return (
			<div className="image-uploader">
				<div className="loaded-images">
					<span className="legend">Imagens carregadas</span>
				</div>
				<Dropzone onDrop={this.onDrop}>
					<Loading loading={this.state.sending} />
					<span className="legend">Arraste as imagens para cá</span>
				</Dropzone>
			</div>
		)
	}
});

module.exports = ImageUploader;