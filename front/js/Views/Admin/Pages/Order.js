'use strict';

var React = require('react'),
    getStatusColor = require('Common/StatusColor'),
    dateFormatter = require('Common/Formatters/Date'),
    currencyFormatter = require('Common/Formatters/Currency'),
    Grid = require('Views/Common/Grid'),
    Collection = require('Collections/Orders'),
    RouteManager = require('Routes/Manager'),
    ButtonCell = require('Views/Common/Grid/Cells/Button'),
    Navigation = require('Views/Admin/Navigation'),
    MessageBarCentral = require('Widgets/MessageBarCentral');

var Order = React.createClass({
	displayName: 'Order',

	getStatusClassName: function (status) {
		var color = getStatusColor(status);

		return 'label label-' + color;
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
						React.createElement(
							'span',
							{ className: this.getStatusClassName(this.props.order.status) },
							this.props.order.statusName
						)
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
			)
		);
	}
});

module.exports = Order;