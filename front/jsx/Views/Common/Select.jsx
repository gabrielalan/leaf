'use strict';

var React = require('react');

var Select = React.createClass({

	createItem: function(item) {
		return <option key={item.id} value={item.value}>{item.name}</option>
	},

	getValue: function() {
		return this.refs.el.value;
	},

	render: function(){
		return (
			<select ref="el" className="form-control">{this.props.items.map(this.createItem)}</select>
		)
	}
});

module.exports = Select;