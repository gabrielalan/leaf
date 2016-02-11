'use strict';

var React = require('react');

var Alert = React.createClass({
	displayName: 'Alert',

	render: function () {
		var className = 'alert alert-' + (this.props.type || 'warning');

		if (!this.props.show) className += ' hide';

		return React.createElement(
			'div',
			{ className: className, role: 'alert' },
			this.props.children
		);
	}
});

module.exports = Alert;