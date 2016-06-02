'use strict';

var React = require('react'),
	getStatusColor = require('Common/StatusColor'),
	DateFormatter = require('Views/Common/Grid/Cells/Date'),
	CurrencyFormatter = require('Views/Common/Grid/Cells/Currency'),
	Grid = require('Views/Common/Grid'),
	Empty = require('Views/Common/Empty'),
	Order = require('Views/Admin/Pages/Order'),
	Collection = require('Collections/Orders'),
	RouteManager = require('Routes/Manager'),
	ButtonCell = require('Views/Common/Grid/Cells/Button'),
	Navigation = require('Views/Admin/Navigation'),
	MessageBarCentral = require('Widgets/MessageBarCentral');

var Orders = React.createClass({

	getInitialState: function() {
		var me = this;

		return {
			viewing: null,
			columns: [
				{
					id: 'id',
					label: '#',
					modelAttr: 'id'
				},
				{
					id: 'status',
					label: 'Status',
					modelAttr: 'statusName'
				},
				{
					id: 'gross',
					label: 'Valor bruto',
					modelAttr: 'gross_amount',
					type: CurrencyFormatter
				},
				{
					id: 'net',
					label: 'Valor líquido',
					modelAttr: 'net_amount',
					type: CurrencyFormatter
				},
				{
					id: 'name',
					label: 'Comprador',
					modelAttr: 'name'
				},
				{
					id: 'created',
					label: 'Aberto em',
					modelAttr: 'date_created',
					type: DateFormatter
				},
				{
					id: 'view',
					label: 'Ver compra',
					type: ButtonCell,
					props: {
						type: 'warning',
						onClick: function() {
							me.setState({
								viewing: this.props.row
							});
						}
					}
				}
			]

		};
	},

	componentDidMount: function() {
		Collection.fetch();
	},

	onAddClick: function() {
		RouteManager.dispatch('/categories/add');
	},

	setGridLineClass: function(item) {
		return getStatusColor(item.status);
	},

	backToGrid: function() {
		Collection.fetch();

		this.setState({
			viewing: null
		})
	},

	renderEmpty: function() {
		return <Empty />;
	},

	renderGrid: function() {
		return <Grid collection={Collection} columns={this.state.columns} rowKeyAttr="id" getLineClass={this.setGridLineClass} />;
	},

	renderList: function() {
		return (
			<div className="orders">
				<div className="toolbar-grid">
					<h1>Compras efetuadas</h1>
					{this.renderGrid()}
				</div>
			</div>
		);
	},

	renderOrder: function() {
		return (
			<div className="order-holder">
				<button className="btn btn-xs btn-info" onClick={this.backToGrid}>&laquo; Voltar</button>
				<Order order={this.state.viewing} />
			</div>
		);
	},

	render: function() {
		return this.state.viewing ? this.renderOrder() : this.renderList();
	}
});

module.exports = Orders;