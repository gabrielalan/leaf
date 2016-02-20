'use strict';

var React = require('react'),
	Dropzone = require('Views/Common/Dropzone'),
	Image = require('Views/Common/ImageUploader/Image'),
	Loading = require('Views/Common/Loading');

var ImageUploader = React.createClass({

	getInitialState: function() {
		return {
			sending: false,
			images: []
		};
	},

	handleSavedImages: function(response) {
		this.setState({
			sending: false,
			images: response.responseJSON.data
		});
	},

	makeData: function (files) {
		var data = new FormData();

		files.forEach(function(file){
			data.append('image', file);
		});

		return data;
	},

	upload: function(files) {
		$.ajax({
			url: '/admin/rest/images',
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

	onImageClick: function() {
		debugger;
	},

	createImages: function() {
		var me = this;

		return this.state.images.map(function(image){
			return <Image key={image.id} path={image.path} onClick={me.onImageClick} />
		});
	},

	render: function(){
		return (
			<div className="image-uploader">
				<div className="loaded-images">
					<span className="legend">Imagens carregadas</span>
					{this.createImages()}
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