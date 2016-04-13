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

	getStatusClassName: function(status) {
		var color = getStatusColor(status);

		return 'label label-' + color;
	},

	render: function() {
		var labelClass = 'col-lg-2 col-md-2 col-sm-6 col-xs-6', valueClass = 'col-lg-4 col-md-4 col-sm-6 col-xs-6';

		return (
			<div className="order">
				<fieldset>
					<legend>Dados do comprador</legend>
					<div className="row">
						<div className={labelClass}>Comprador</div>
						<div className={valueClass}><b>{this.props.order.name}</b></div>
						<div className={labelClass}>E-mail</div>
						<div className={valueClass}><b>{this.props.order.email}</b></div>
					</div>
					<div className="row">
						<div className={labelClass}>Telefone</div>
						<div className={valueClass}><b>{this.props.order.phone}</b></div>
						<div className={labelClass}>Código postal</div>
						<div className={valueClass}><b>{this.props.order.postal_code}</b></div>
					</div>
					<div className="row">

						<div className={labelClass}>Rua</div>
						<div className={valueClass}><b>{this.props.order.street}</b></div>
						<div className={labelClass}>Número</div>
						<div className={valueClass}><b>{this.props.order.number}</b></div>
					</div>
					<div className="row">
						<div className={labelClass}>Bairro</div>
						<div className={valueClass}><b>{this.props.order.district}</b></div>
						<div className={labelClass}>Cidade</div>
						<div className={valueClass}><b>{this.props.order.city}</b></div>
					</div>
					<div className="row">
						<div className={labelClass}>Estado</div>
						<div className={valueClass}><b>{this.props.order.state}</b></div>
						<div className={labelClass}>Bairro</div>
						<div className={valueClass}><b>{this.props.order.country}</b></div>
					</div>
				</fieldset>
				<fieldset>
					<legend>Dados da compra</legend>
					<div className="row">
						<div className={labelClass}>Status</div>
						<div className={valueClass}><span className={this.getStatusClassName(this.props.order.status)}>{this.props.order.statusName}</span></div>
						<div className={labelClass}>Data da compra</div>
						<div className={valueClass}><b>{dateFormatter(this.props.order.date_created)}</b></div>
					</div>
					<div className="row">
						<div className={labelClass}>Valor Líquido</div>
						<div className={valueClass}><b>{currencyFormatter(this.props.order.net_amount)}</b></div>
						<div className={labelClass}>Data de atualização</div>
						<div className={valueClass}><b>{dateFormatter(this.props.order.date_updated)}</b></div>
					</div>
					<div className="row">
						<div className={labelClass}>Valor Bruto</div>
						<div className={valueClass}><b>{currencyFormatter(this.props.order.gross_amount)}</b></div>
						<div className={labelClass}>Token</div>
						<div className={valueClass}><b>{this.props.order.pagseguro_sale_id}</b></div>
					</div>
				</fieldset>
			</div>
		);
	}
});

module.exports = Order;