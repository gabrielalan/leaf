'use strict';

var React = require('react'),
	Navigation = require('Views/Admin/Navigation'),
	MessageBar = require('Views/Common/MessageBar');

var Header = React.createClass({

	render: function() {
		return (
			<div className="header-holder">
				<Navigation />
				<MessageBar />
			</div>
		);
	}
});

module.exports = Header;