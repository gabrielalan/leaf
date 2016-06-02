'use strict';

var React = require('react'),
    numeral = require('Common/NumeralInstance');

var CurrencyCell = React.createClass({
	displayName: 'CurrencyCell',


	getValue: function () {
		var column = this.props.column,
		    row = this.props.row;

		return row[column.modelAttr];
	},

	getFormatted: function () {
		var value = this.getValue();

		var bol = value != '0' && value != 'false';

		return bol ? 'Sim' : 'Não';
	},

	render: function () {
		return React.createElement(
			'span',
			null,
			this.getFormatted()
		);
	}
});

module.exports = CurrencyCell;