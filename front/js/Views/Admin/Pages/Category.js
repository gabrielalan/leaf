'use strict';

var React = require('react'),
    RouteManager = require('Routes/Manager'),
    CategoriesCollection = require('Collections/Categories'),
    MessageBarCentral = require('Widgets/MessageBarCentral'),
    CategoryModel = require('Models/Category'),
    Dropzone = require('Views/Common/Dropzone'),
    Loading = require('Views/Common/Loading'),
    Select = require('Views/Common/Select');

var Category = React.createClass({
	displayName: 'Category',

	model: null,

	getInitialState: function () {
		this.initModel();

		return {
			loading: false,
			images: []
		};
	},

	initModel: function () {
		this.model = new CategoryModel();

		this.model.on('sync', this.onModelSync);
		this.model.on('request', this.onStartsRequest);
	},

	onStartsRequest: function () {
		this.setState({
			loading: true
		});
	},

	onModelSync: function () {
		var attr = this.model.attributes,
		    refs = this.refs;

		refs.name.value = attr.name;
		refs.description.value = attr.description;
		refs.parent.setValue(attr.category_id);

		this.setState({
			loading: false
		});
	},

	componentDidMount: function () {
		CategoriesCollection.fetch();

		if (!this.props.id) return false;

		this.model.set({
			id: this.props.id
		});

		this.model.fetch();
	},

	onFormSubmit: function (evt) {
		evt.stopPropagation();
		evt.preventDefault();

		this.save();

		return false;
	},

	save: function () {
		this.model.set({
			name: this.refs.name.value,
			description: this.refs.description.value,
			category_id: this.refs.parent.getValue(),
			image_id: 1
		});

		if (!this.model.isValid()) return this.handleError(this.model.validationError);

		this.model.save(null, {
			success: function () {
				RouteManager.dispatch('/categories');
			},
			error: function (model, xhr) {
				MessageBarCentral.setMessage(xhr.responseText);
			}
		});
	},

	handleError: function (error) {
		MessageBarCentral.setMessage(error.message);
	},

	getCategoriesSelectFilter: function () {
		return {
			category_id: null
		};
	},

	getSelectMap: function () {
		return {
			id: 'id',
			name: 'name',
			value: 'id'
		};
	},

	onDrop: function (files) {
		this.setState({
			images: files.map(function (file) {
				return file.preview;
			})
		});
	},

	mountImages: function () {
		return this.state.images.map(function (url) {
			return React.createElement('img', { src: url });
		});
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'form-container' },
			React.createElement(Loading, { loading: this.state.loading }),
			React.createElement(
				'h2',
				null,
				'Adicionar categoria'
			),
			React.createElement(
				'form',
				{ action: '#', method: 'POST', className: 'form-horizontal', onSubmit: this.onFormSubmit },
				React.createElement(
					'fieldset',
					null,
					React.createElement(
						'legend',
						null,
						'Geral'
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'name', className: 'col-sm-2 control-label' },
							'Nome'
						),
						React.createElement(
							'div',
							{ className: 'col-sm-10' },
							React.createElement('input', { type: 'text', className: 'form-control', id: 'name', placeholder: 'Nome da categoria', ref: 'name' })
						)
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'description', className: 'col-sm-2 control-label' },
							'Descrição'
						),
						React.createElement(
							'div',
							{ className: 'col-sm-10' },
							React.createElement('input', { type: 'text', className: 'form-control', id: 'description', placeholder: 'Descrição da categoria', ref: 'description' })
						)
					)
				),
				React.createElement(
					'fieldset',
					null,
					React.createElement(
						'legend',
						null,
						'Categoria Pai'
					),
					React.createElement(Select, { ref: 'parent', label: 'Categoria', collection: CategoriesCollection, filter: this.getCategoriesSelectFilter(), map: this.getSelectMap(), empty: true })
				),
				React.createElement(
					'fieldset',
					null,
					React.createElement(
						'legend',
						null,
						'Imagem da categoria'
					),
					React.createElement(Dropzone, { onDrop: this.onDrop }),
					this.mountImages()
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'div',
						{ className: 'col-sm-offset-2 col-sm-10' },
						React.createElement(
							'button',
							{ type: 'submit', className: 'btn btn-primary' },
							'Salvar'
						)
					)
				)
			)
		);
	}
});

module.exports = Category;