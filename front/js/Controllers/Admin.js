'use strict';

var React = require('react'),
	ReactDOM = require('ReactDOM'),
	Category = require('Views/Admin/Pages/Category'),
	Categories = require('Views/Admin/Pages/Categories');

function _getContentEl() {
	return document.querySelector('#content');
}

module.exports = {

	"": function() {},

	"categories": function() {
		ReactDOM.render(React.createElement(Categories, null), _getContentEl());
	},

	"categories/add": function() {
		ReactDOM.render(React.createElement(Category, null), _getContentEl());
	},

	"categories/:id": function(req) {
		ReactDOM.render(React.createElement(Category, {
			id: req.params.id
		}), _getContentEl());
	}
};