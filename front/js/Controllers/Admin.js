'use strict';

var React = require('react'),
	ReactDOM = require('ReactDOM'),
	Category = require('Views/Admin/Pages/Category'),
	Product = require('Views/Admin/Pages/Product'),
	Products = require('Views/Admin/Pages/Products'),
	Categories = require('Views/Admin/Pages/Categories');

function _getContentEl() {
	return document.querySelector('#content');
}

module.exports = {

	"": function() {},

	"products": function() {
		ReactDOM.render(React.createElement(Products, null), _getContentEl());
	},

	"products/add": function() {
		ReactDOM.render(React.createElement(Product, null), _getContentEl());
	},

	"products/:id": function(req) {
		ReactDOM.render(React.createElement(Product, {
			id: req.params.id
		}), _getContentEl());
	},

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