'use strict';

var React = require('react'),
	Grid = require('Views/Common/Grid'),
	CategoriesCollection = require('Collections/Categories'),
	RouteManager = require('Routes/Manager'),
	ButtonCell = require('Views/Common/Grid/Cells/Button'),
	Navigation = require('Views/Admin/Navigation'),
	MessageBarCentral = require('Widgets/MessageBarCentral');

var Categories = React.createClass({

	getInitialState: function() {
		return {
			columns: [
				{
					id: 'id',
					label: '#',
					modelAttr: 'id'
				},
				{
					id: 'name',
					label: 'Name',
					modelAttr: 'name'
				},
				{
					id: 'description',
					label: 'Descrição',
					modelAttr: 'description'
				},
				{
					id: 'parent',
					label: 'Categoria pai',
					modelAttr: 'parent'
				},
				{
					id: 'delete',
					label: 'Remover',
					type: ButtonCell,
					props: {
						type: 'danger',
						onClick: function() {
							var model = CategoriesCollection.findWhere({
								id: this.props.row.id
							});

							if (model) {
								model.destroy({
									success: function() {
										CategoriesCollection.fetch();
									},
									error: function(model, xhr) {
										CategoriesCollection.fetch();

										MessageBarCentral.setMessage(xhr.responseText);
									}
								});
							}
						}
					}
				}
			]

		};
	},

	componentDidMount: function() {
		CategoriesCollection.fetch();
	},

	onAddClick: function() {
		RouteManager.dispatch('/categories/add');
	},

	render: function() {
		return (
			<div className="toolbar-grid">
				<div className="toolbar">
					<button className="btn btn-primary" onClick={this.onAddClick}>Adicionar categoria</button>
				</div>
				<Grid collection={CategoriesCollection} columns={this.state.columns} rowKeyAttr="id" />
			</div>
		);
	}
});

module.exports = Categories;