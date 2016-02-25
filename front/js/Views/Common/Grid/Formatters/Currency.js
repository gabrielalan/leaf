'use strict';

var React = require('react'),
    numeral = require('Common/NumeralInstance');

var CurrencyFormatter = React.createClass({
	displayName: 'CurrencyFormatter',

	render: function () {
		var column = this.props.column,
		    props = column.props;

		return React.createElement(
			'span',
			null,
			numeral(10.5).format('$0,00')
		);
	}
});

module.exports = CurrencyFormatter;