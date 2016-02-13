'use strict';

var React = require('react'),
    Navigation = require('Views/Admin/Navigation');

var Header = React.createClass({
	displayName: 'Header',

	render: function () {
		return React.createElement(Navigation, null);
	}
});

module.exports = Header;