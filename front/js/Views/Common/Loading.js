'use strict';

var React = require('react');

var Loading = React.createClass({
	displayName: 'Loading',


	getContainer: function () {
		return $(this.refs.container);
	},

	render: function () {
		var className = 'load-mask';

		if (this.props.fixed) className += ' load-fixed';

		if (this.props.loading) className += ' loading';

		return React.createElement(
			'div',
			{ className: className, ref: 'container' },
			React.createElement('span', { className: 'spined icon icon-spinner' })
		);
	}
});

module.exports = Loading;