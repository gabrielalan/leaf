'use strict';

var React = require('react'),
	formatter = require('Common/Formatters/Date');

var CurrencyCell = React.createClass({

	getValue: function () {
		var column = this.props.column, row = this.props.row;

		return row[column.modelAttr];
	},

	render: function(){
		return (
			<span>{formatter(this.getValue())}</span>
		)
	}
});

module.exports = CurrencyCell;