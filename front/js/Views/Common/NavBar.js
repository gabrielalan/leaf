'use strict';

var React = require('react');

var NavBar = React.createClass({
	displayName: 'NavBar',

	render: function () {
		var className = 'navbar navbar-default navbar-fixed-top';

		if (this.props.inverse) className += ' navbar-inverse';

		return React.createElement(
			'nav',
			{ className: className },
			React.createElement(
				'div',
				{ className: 'container-fluid' },
				React.createElement(
					'div',
					{ className: 'navbar-header' },
					React.createElement(
						'button',
						{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-6', 'aria-expanded': 'false' },
						React.createElement(
							'span',
							{ className: 'sr-only' },
							'Toggle navigation'
						),
						' ',
						React.createElement('span', { className: 'icon-bar' }),
						' ',
						React.createElement('span', { className: 'icon-bar' }),
						' ',
						React.createElement('span', { className: 'icon-bar' })
					),
					React.createElement(
						'a',
						{ className: 'navbar-brand', href: '#' },
						this.props.brand
					)
				),
				React.createElement(
					'div',
					{ className: 'collapse navbar-collapse' },
					this.props.children
				)
			)
		);
	}
});

module.exports = NavBar;