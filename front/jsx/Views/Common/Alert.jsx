'use strict';

var React = require('react');

var Alert = React.createClass({

	render: function(){
		var className = 'alert alert-' + (this.props.type || 'warning');

		if (!this.props.show)
			className += ' hide';

		return (
			<div className={className} role="alert">{this.props.children}</div>
		)
	}
});

module.exports = Alert;