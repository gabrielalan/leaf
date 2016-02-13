'use strict';

var Backbone = require('Backbone'),
	Utils = require('Common/Utils');

var Category = Backbone.Model.extend({
	url: function() {
		var id = this.id || '';

		return Utils.baseUrl + '/admin/rest/categories/' + id;
	},

	defaults: {
		id: null,
		name: null,
		description: null,
		image_id: null,
		category_id: null,
		parent: null
	},

	validate: function(attrs, options) {
		if (attrs.name.length < 3) {
			return new Error('O nome da categoria não pode ser menor que 3 caracteres', 'name');
		}

		if (attrs.description.length < 3) {
			return new Error('A descrição da categoria não pode ser menor que 3 caracteres', 'description');
		}

		if (!attrs.image_id) {
			return new Error('Uma imagem deve ser criada para esta categoria', 'image_id');
		}
	}
});

module.exports = Category;