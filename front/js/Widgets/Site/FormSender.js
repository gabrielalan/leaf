'use strict';

var Klass = require('Klass'),
	Loading = require('Widgets/Loading');

var FormSender = Klass.create({

	name: 'FormSender',

	form: null,

	quantity: null,

	construct: function(form) {
		this.form = $(form);

		this.initLoading();

		this.bindEvents();
	},

	initLoading: function() {
		this.loading = new Loading();

		this.loading.compile();

		this.form.append(this.loading.compiled);
	},

	bindEvents: function() {
		this.form.on('submit', this.onSubmit.bind(this));
	},

	send: function() {
		var me = this;

		$.ajax({
			url: this.form.attr('action'),
			method: 'post',
			data: JSON.stringify(this.getData()),
			contentType: "application/json; charset=utf-8",
			processData: false,
			complete: function(result) {
				me.loading.setState(false);

				alert("Seus dados foram enviados. Obrigado.");

				me.form.get(0).reset();
			}
		});
	},

	getData: function () {
		var serialized = this.form.serializeArray();

		return serialized
			.map(function(current) {
				var normalized = {}; normalized[current.name] = current.value;
				return normalized;
			})
			.reduce(function(a,b) {
				return $.extend(a,b);
			});
	},

	onSubmit: function (evt) {
		evt.preventDefault();

		if (this.loading.isLoading)
			return false;

		this.loading.setState(true);

		this.send();
		return false;
	}
});

module.exports = FormSender;