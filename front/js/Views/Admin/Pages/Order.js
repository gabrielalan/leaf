'use strict';

var React = require('react'),
    getStatusColor = require('Common/StatusColor'),
    dateFormatter = require('Common/Formatters/Date'),
    currencyFormatter = require('Common/Formatters/Currency'),
    Grid = require('Views/Common/Grid'),
    Collection = require('Collections/OrderItems'),
    ButtonCell = require('Views/Common/Grid/Cells/Button'),
    Navigation = require('Views/Admin/Navigation'),
    MessageBarCentral = require('Widgets/MessageBarCentral');

var Order = React.createClass({
	displayName: 'Order',

	getInitialState: function () {
		var me = this;

		me.collection = new Collection([], { id: this.props.order.id });

		return {
			status: this.props.order.status,
			statusName: this.props.order.statusName,
			columns: [{
				id: 'name',
				label: 'Produto',
				modelAttr: 'name'
			}, {
				id: 'description',
				label: 'Descrição',
				modelAttr: 'description'
			}, {
				id: 'quantity',
				label: 'Quantidade',
				modelAttr: 'quantity'
			}]
		};
	},

	componentDidMount: function () {
		this.collection.fetch();
	},

	getStatusClassName: function (status) {
		var color = getStatusColor(status);

		return 'label label-' + color;
	},

	changeStatus: function (e) {
		var me = this,
		    status = this.state.status < 10 ? 10 : 11;

		e.stopPropagation();
		e.preventDefault();

		$.ajax({
			url: '/admin/rest/orders/' + this.props.order.id + '/status/' + status,
			method: 'GET',
			success: function (response) {
				me.setState({
					status: response.status,
					statusName: response.statusName
				});
			},
			error: function (response) {
				alert(response.responseText);
			}
		});

		return false;
	},

	renderStatus: function () {
		let changeButton = null;

		if (this.state.status < 10) {
			changeButton = React.createElement(
				'a',
				{ href: '#', className: 'btn btn-xs btn-link', onClick: this.changeStatus },
				'Mudar para enviado'
			);
		} else if (this.state.status < 11) {
			changeButton = React.createElement(
				'a',
				{ href: '#', className: 'btn btn-xs btn-link', onClick: this.changeStatus },
				'Mudar para finalizado'
			);
		}

		return React.createElement(
			'div',
			null,
			React.createElement(
				'span',
				{ className: this.getStatusClassName(this.state.status) },
				this.state.statusName
			),
			changeButton
		);
	},

	render: function () {
		var labelClass = 'col-lg-2 col-md-2 col-sm-6 col-xs-6',
		    valueClass = 'col-lg-4 col-md-4 col-sm-6 col-xs-6';

		return React.createElement(
			'div',
			{ className: 'order' },
			React.createElement(
				'fieldset',
				null,
				React.createElement(
					'legend',
					null,
					'Dados do comprador'
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Comprador'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.name
						)
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'E-mail'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.email
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Telefone'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.phone
						)
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'Código postal'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.postal_code
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Rua'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.street
						)
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'Número'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.number
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Bairro'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.district
						)
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'Cidade'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.city
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Estado'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.state
						)
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'Bairro'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.country
						)
					)
				)
			),
			React.createElement(
				'fieldset',
				null,
				React.createElement(
					'legend',
					null,
					'Dados da compra'
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Status'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						this.renderStatus()
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'Data da compra'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							dateFormatter(this.props.order.date_created)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Valor Líquido'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							currencyFormatter(this.props.order.net_amount)
						)
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'Data de atualização'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							dateFormatter(this.props.order.date_updated)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: labelClass },
						'Valor Bruto'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							currencyFormatter(this.props.order.gross_amount)
						)
					),
					React.createElement(
						'div',
						{ className: labelClass },
						'Token'
					),
					React.createElement(
						'div',
						{ className: valueClass },
						React.createElement(
							'b',
							null,
							this.props.order.pagseguro_sale_id
						)
					)
				)
			),
			React.createElement(
				'fieldset',
				null,
				React.createElement(
					'legend',
					null,
					'Itens da compra'
				),
				React.createElement(
					'div',
					{ className: 'toolbar-grid' },
					React.createElement(Grid, { collection: this.collection, columns: this.state.columns, rowKeyAttr: 'name' })
				)
			)
		);
	}
});

module.exports = Order;