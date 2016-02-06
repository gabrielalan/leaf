'use strict';

var React = require('react');

var Select = React.createClass({
	displayName: 'Select',

	createItem: function (item) {
		return React.createElement(
			'option',
			{ key: item.id, value: item.value },
			item.name
		);
	},

	getValue: function () {
		return this.refs.el.value;
	},

	render: function () {
		return React.createElement(
			'select',
			{ ref: 'el', className: 'form-control' },
			this.props.items.map(this.createItem)
		);
	}
});

module.exports = Select;