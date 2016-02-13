'use strict';

var React = require('react');

var ButtonCell = React.createClass({

	getCustomHandler: function() {
		try {
			return this.props.column.props.onClick.bind(this);
		} catch(e){
			return function(){};
		}
	},

	render: function(){
		var column = this.props.column, props = column.props;

		return (
			<button className={'btn btn-xs btn-' + props.type} onClick={this.getCustomHandler()}>{column.label}</button>
		)
	}
});

module.exports = ButtonCell;