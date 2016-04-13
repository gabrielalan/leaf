'use strict';

var React = require('react'),
    getStatusColor = require('Common/StatusColor'),
    DateFormatter = require('Views/Common/Grid/Cells/Date'),
    CurrencyFormatter = require('Views/Common/Grid/Cells/Currency'),
    Grid = require('Views/Common/Grid'),
    Order = require('Views/Admin/Pages/Order'),
    Collection = require('Collections/Orders'),
    RouteManager = require('Routes/Manager'),
    ButtonCell = require('Views/Common/Grid/Cells/Button'),
    Navigation = require('Views/Admin/Navigation'),
    MessageBarCentral = require('Widgets/MessageBarCentral');

var Orders = React.createClass({
	displayName: 'Orders',

	getInitialState: function () {
		var me = this;

		return {
			viewing: null,
			columns: [{
				id: 'id',
				label: '#',
				modelAttr: 'id'
			}, {
				id: 'status',
				label: 'Status',
				modelAttr: 'statusName'
			}, {
				id: 'gross',
				label: 'Valor bruto',
				modelAttr: 'gross_amount',
				type: CurrencyFormatter
			}, {
				id: 'net',
				label: 'Valor líquido',
				modelAttr: 'net_amount',
				type: CurrencyFormatter
			}, {
				id: 'name',
				label: 'Comprador',
				modelAttr: 'name'
			}, {
				id: 'created',
				label: 'Aberto em',
				modelAttr: 'date_created',
				type: DateFormatter
			}, {
				id: 'view',
				label: 'Ver compra',
				type: ButtonCell,
				props: {
					type: 'warning',
					onClick: function () {
						me.setState({
							viewing: this.props.row
						});
					}
				}
			}]

		};
	},

	componentDidMount: function () {
		Collection.fetch();
	},

	onAddClick: function () {
		RouteManager.dispatch('/categories/add');
	},

	setGridLineClass: function (item) {
		return getStatusColor(item.status);
	},

	backToGrid: function () {
		this.setState({
			viewing: null
		});
	},

	renderGrid: function () {
		return React.createElement(
			'div',
			{ className: 'orders' },
			React.createElement(
				'div',
				{ className: 'toolbar-grid' },
				React.createElement(Grid, { collection: Collection, columns: this.state.columns, rowKeyAttr: 'id', getLineClass: this.setGridLineClass })
			)
		);
	},

	renderOrder: function () {
		return React.createElement(
			'div',
			{ className: 'order-holder' },
			React.createElement(
				'button',
				{ className: 'btn btn-xs btn-info', onClick: this.backToGrid },
				'« Voltar'
			),
			React.createElement(Order, { order: this.state.viewing })
		);
	},

	render: function () {
		return this.state.viewing ? this.renderOrder() : this.renderGrid();
	}
});

module.exports = Orders;