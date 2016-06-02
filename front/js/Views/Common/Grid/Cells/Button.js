'use strict';

var React = require('react');

var ButtonCell = React.createClass({
	displayName: 'ButtonCell',


	getCustomHandler: function () {
		try {
			return this.props.column.props.onClick.bind(this);
		} catch (e) {
			return function () {};
		}
	},

	render: function () {
		var column = this.props.column,
		    props = column.props;

		return React.createElement(
			'button',
			{ className: 'btn btn-xs btn-' + props.type, onClick: this.getCustomHandler() },
			column.label
		);
	}
});

module.exports = ButtonCell;