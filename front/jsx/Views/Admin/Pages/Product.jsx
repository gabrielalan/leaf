'use strict';

var React = require('react'),
	RouteManager = require('Routes/Manager'),
	numeral = require('Common/NumeralInstance'),
	CategoriesCollection = require('Collections/Categories'),
	MessageBarCentral = require('Widgets/MessageBarCentral'),
	Model = require('Models/Product'),
	ImageUploader = require('Views/Common/ImageUploader'),
	Loading = require('Views/Common/Loading'),
	Select = require('Views/Common/Select');

var Product = React.createClass({

	model: null,

	getInitialState: function() {
		this.initModel();

		return {
			loading: false,
			images: []
		};
	},

	initModel: function() {
		this.model = new Model();

		this.model.on('sync', this.onModelSync);
		this.model.on('request', this.onStartsRequest);
	},

	onStartsRequest: function() {
		this.setState({
			loading: true
		});
	},

	onModelSync: function() {
		var attr = this.model.attributes, refs = this.refs;

		refs.name.value = attr.name;
		refs.description.value = attr.description;
		refs.category.setValue(attr.category_id);
		refs.value.value = numeral(attr.value).format('0.00');
		refs.highlight.checked = attr.highlight;
		//refs.image.setValue([{
		//	id: attr.image_id,
		//	path: attr.path
		//}]);

		this.setState({
			loading: false
		});
	},

	componentDidMount: function() {
		CategoriesCollection.fetch();

		if (!this.props.id)
			return false;

		this.model.set({
			id: this.props.id
		});

		this.model.fetch();
	},

	onFormSubmit: function(evt) {
		evt.stopPropagation();
		evt.preventDefault();

		this.save();

		return false;
	},

	save: function() {
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

	getSelectMap: function() {
		return {
			id: 'id',
			name: 'name',
			value: 'id'
		}
	},

	render: function() {
		return (
			<div className="form-container">
				<Loading loading={this.state.loading} />

				<h2>Adicionar produto</h2>

				<form action="#" method="POST" className="form-horizontal" onSubmit={this.onFormSubmit}>
					<fieldset>
						<legend>Geral</legend>
						<div className="form-group">
							<label htmlFor="name" className="col-sm-2 control-label">Nome</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="name" placeholder="Nome do produto" ref="name" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="description" className="col-sm-2 control-label">Descrição</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="description" placeholder="Descrição" ref="description" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="value" className="col-sm-2 control-label">Valor R$</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="value" placeholder="0.00" ref="value" />
							</div>
						</div>
						<Select ref="category" label="Categoria" collection={CategoriesCollection} map={this.getSelectMap()} />
						<div className="form-group">
							<div className="col-sm-offset-2 col-sm-10">
								<div className="checkbox">
									<label>
										<input htmlFor="highlight" type="checkbox" ref="highlight" /> Destaque?
									</label>
								</div>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>Imagem da categoria</legend>
						<ImageUploader ref="image" limit={1} delete="local" url="/admin/rest/images/products" />
					</fieldset>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-primary">Salvar</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = Product;