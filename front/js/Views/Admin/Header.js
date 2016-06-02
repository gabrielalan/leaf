'use strict';

var React = require('react'),
    Navigation = require('Views/Admin/Navigation'),
    MessageBar = require('Views/Common/MessageBar');

var Header = React.createClass({
	displayName: 'Header',


	render: function () {
		return React.createElement(
			'div',
			{ className: 'header-holder' },
			React.createElement(Navigation, null),
			React.createElement(MessageBar, null)
		);
	}
});

module.exports = Header;