'use strict';

var React = require('react'),
    formatter = require('Common/Formatters/Currency');

var CurrencyCell = React.createClass({
	displayName: 'CurrencyCell',


	getValue: function () {
		var column = this.props.column,
		    row = this.props.row;

		return row[column.modelAttr];
	},

	render: function () {
		return React.createElement(
			'span',
			null,
			formatter(this.getValue())
		);
	}
});

module.exports = CurrencyCell;