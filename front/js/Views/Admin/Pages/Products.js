'use strict';

var React = require('react'),
    Grid = require('Views/Common/Grid'),
    Empty = require('Views/Common/Empty'),
    Collection = require('Collections/Products'),
    RouteManager = require('Routes/Manager'),
    ButtonCell = require('Views/Common/Grid/Cells/Button'),
    CurrencyFormatter = require('Views/Common/Grid/Cells/Currency'),
    BooleanFormatter = require('Views/Common/Grid/Cells/Boolean'),
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
				id: 'value',
				label: 'R$',
				modelAttr: 'value',
				type: CurrencyFormatter
			}, {
				id: 'highlight',
				label: 'Destaque',
				modelAttr: 'highlight',
				type: BooleanFormatter
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
			}, {
				id: 'delete',
				label: 'Remover',
				type: ButtonCell,
				props: {
					type: 'danger',
					onClick: function () {
						var model = Collection.findWhere({
							id: this.props.row.id
						});

						if (model) {
							model.destroy({
								success: function () {
									Collection.fetch();
								},
								error: function (model, xhr) {
									Collection.fetch();

									MessageBarCentral.setMessage(xhr.responseText);
								}
							});
						}
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

	renderEmpty: function () {
		return React.createElement(Empty, null);
	},

	renderGrid: function () {
		return React.createElement(Grid, { collection: Collection, columns: this.state.columns, rowKeyAttr: 'id' });
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
			!Collection.length ? this.renderEmpty() : this.renderGrid()
		);
	}
});

module.exports = Categories;