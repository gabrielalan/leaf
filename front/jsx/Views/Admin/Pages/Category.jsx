'use strict';

var React = require('react'),
	RouteManager = require('Routes/Manager'),
	CategoriesCollection = require('Collections/Categories'),
	MessageBarCentral = require('Widgets/MessageBarCentral'),
	CategoryModel = require('Models/Category'),
	Select = require('Views/Common/Select');

var Category = React.createClass({

	model: null,

	getInitialState: function() {
		this.model = new CategoryModel();

		return {};
	},

	componentDidMount: function() {
		CategoriesCollection.fetch();
	},

	onFormSubmit: function(evt) {
		evt.stopPropagation();
		evt.preventDefault();

		this.save();

		return false;
	},

	save: function() {
		this.model.set({
			name: this.refs.name.value,
			description: this.refs.description.value,
			category_id: this.refs.parent.getValue(),
			image_id: 1
		});

		if (!this.model.isValid())
			return this.handleError(this.model.validationError);

		this.model.save(null, {
			success: function() {
				RouteManager.dispatch('/categories');
			},
			error: function(model, xhr) {
				MessageBarCentral.setMessage(xhr.responseText);
			}
		});
	},

	handleError: function(error) {
		MessageBarCentral.setMessage(error.message);
	},

	getCategoriesSelectFilter: function() {
		return {
			category_id: null
		};
	},

	render: function() {
		return (
			<div className="form-container">
				<h2>Adicionar categoria</h2>

				<form action="#" method="POST" className="form-horizontal" onSubmit={this.onFormSubmit}>
					<fieldset>
						<legend>Geral</legend>
						<div className="form-group">
							<label htmlFor="name" className="col-sm-2 control-label">Nome</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="name" placeholder="Nome da categoria" ref="name" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="description" className="col-sm-2 control-label">Descrição</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="description" placeholder="Descrição da categoria" ref="description" />
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>Categoria Pai</legend>
						<Select ref="parent" label="Categoia" collection={CategoriesCollection} filter={this.getCategoriesSelectFilter()} id="id" name="name" value="id" empty={true} />
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

module.exports = Category;