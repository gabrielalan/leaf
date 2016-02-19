'use strict';

var React = require('react'),
    _ = require('underscore'),
    Loading = require('Views/Common/Loading');

var impureCreateObject = function (file) {
	return window.URL.createObjectURL(file);
};

var Select = React.createClass({
	displayName: 'Select',

	getInitialState: function () {
		return {
			isDragging: false
		};
	},

	setIsDragging: function (dragging) {
		this.setState({
			isDragging: dragging
		});
	},

	onDragEnter: function () {
		this.setIsDragging(true);
	},

	onDragLeave: function () {
		this.setIsDragging(false);
	},

	createPreview: function (file) {
		file.preview = impureCreateObject(file);

		return file;
	},

	createPreviews: function (files) {
		return files.map(this.createPreview);
	},

	acceptedFile: function (file) {
		return true;
	},

	acceptedFiles: function (files) {
		return files.filter(this.acceptedFile);
	},

	callDropHandler: function (files) {
		if (!this.props.onDrop) return false;

		this.props.onDrop.call(this, files);
	},

	onDrop: function (evt) {
		this.setIsDragging(false);

		var processFiles = _.compose(this.callDropHandler, this.createPreviews, this.acceptedFiles);

		processFiles(Array.prototype.slice.call(evt.dataTransfer.files));

		return this.preventDefault(evt);
	},

	preventDefault: function (event) {
		event.preventDefault();

		return false;
	},

	render: function () {
		return React.createElement('div', { className: "dropzone marching-ants " + (this.state.isDragging ? 'marching' : ''), onDragOver: this.preventDefault, onDragEnter: this.onDragEnter, onDragLeave: this.onDragLeave, onDrop: this.onDrop });
	}
});

module.exports = Select;