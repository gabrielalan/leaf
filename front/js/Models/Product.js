'use strict';

var Backbone = require('Backbone'),
	Utils = require('Common/Utils');

var Product = Backbone.Model.extend({
	url: function() {
		var id = this.id || '';

		return Utils.baseUrl + '/admin/rest/products/' + id;
	},

	defaults: {
		id: null,
		name: null,
		description: null,
		category_id: null,
		value: null,
		highlight: null,
		quantity: null,
		images: []
	},

	validate: function(attrs, options) {
		if (attrs.name.length < 3) {
			return new Error('O nome do produto não pode ser menor que 3 caracteres', 'name');
		}

		if (attrs.description.length < 3) {
			return new Error('A descrição do produto não pode ser menor que 3 caracteres', 'description');
		}

		if (!attrs.category_id) {
			return new Error('Uma categoria deve ser setada para o produto', 'category_id');
		}

		if (typeof attrs.images !== 'array' || attrs.images.length <= 0) {
			return new Error('O produto deve ter uma ou mais imagens', 'images');
		}
	}
});

module.exports = Product;