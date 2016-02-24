'use strict';

var React = require('react'),
    RouteManager = require('Routes/Manager'),
    MessageBarCentral = require('Widgets/MessageBarCentral'),
    Model = require('Models/Product'),
    ImageUploader = require('Views/Common/ImageUploader'),
    Loading = require('Views/Common/Loading'),
    Select = require('Views/Common/Select');

var Product = React.createClass({
	displayName: 'Product',

	model: null,

	getInitialState: function () {
		this.initModel();

		return {
			loading: false,
			images: []
		};
	},

	initModel: function () {
		this.model = new Model();

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
		//refs.parent.setValue(attr.category_id);
		//refs.image.setValue([{
		//	id: attr.image_id,
		//	path: attr.path
		//}]);

		this.setState({
			loading: false
		});
	},

	componentDidMount: function () {
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
		//this.model.set({
		//	name: this.refs.name.value,
		//	description: this.refs.description.value,
		//	category_id: this.refs.parent.getValue(),
		//	image_id: this.getImageId()
		//});
		//
		//if (!this.model.isValid())
		//	return this.handleError(this.model.validationError);
		//
		//this.model.save(null, {
		//	success: function() {
		//		RouteManager.dispatch('/categories');
		//	},
		//	error: function(model, xhr) {
		//		MessageBarCentral.setMessage(xhr.responseText);
		//	}
		//});
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'form-container' },
			React.createElement(Loading, { loading: this.state.loading }),
			React.createElement(
				'h2',
				null,
				'Adicionar produto'
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
							React.createElement('input', { type: 'text', className: 'form-control', id: 'name', placeholder: 'Nome do produto', ref: 'name' })
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
							React.createElement('input', { type: 'text', className: 'form-control', id: 'description', placeholder: 'Descrição', ref: 'description' })
						)
					)
				),
				React.createElement(
					'fieldset',
					null,
					React.createElement(
						'legend',
						null,
						'Imagem da categoria'
					),
					React.createElement(ImageUploader, { ref: 'image', limit: 1, 'delete': 'local', url: '/admin/rest/images/products' })
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

module.exports = Product;