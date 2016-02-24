'use strict';

var React = require('react'),
    Grid = require('Views/Common/Grid'),
    Collection = require('Collections/Products'),
    RouteManager = require('Routes/Manager'),
    ButtonCell = require('Views/Common/Grid/Cells/Button'),
    Navigation = require('Views/Admin/Navigation'),
    MessageBarCentral = require('Widgets/MessageBarCentral');

var Categories = React.createClass({
	displayName: 'Categories',

	getInitialState: function () {
		return {
			columns: [{
				id: 'id',
				label: '#',
				modelAttr: 'id'
			}, {
				id: 'name',
				label: 'Name',
				modelAttr: 'name'
			}, {
				id: 'category',
				label: 'Categoria',
				modelAttr: 'category'
			}, {
				id: 'quantity',
				label: 'Estoque',
				modelAttr: 'quantity'
			}, {
				id: 'edit',
				label: 'Editar',
				type: ButtonCell,
				props: {
					type: 'warning',
					onClick: function () {
						RouteManager.dispatch('/products/' + this.props.row.id);
					}
				}
			}]

		};
	},

	componentDidMount: function () {
		Collection.fetch();
	},

	onAddClick: function () {
		RouteManager.dispatch('/products/add');
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'toolbar-grid' },
			React.createElement(
				'div',
				{ className: 'toolbar' },
				React.createElement(
					'button',
					{ className: 'btn btn-primary', onClick: this.onAddClick },
					'Adicionar produto'
				)
			),
			React.createElement(Grid, { collection: Collection, columns: this.state.columns, rowKeyAttr: 'id' })
		);
	}
});

module.exports = Categories;