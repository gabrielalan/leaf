'use strict';

var React = require('react');

var Image = React.createClass({
	displayName: 'Image',

	onClick: function () {
		if (this.props.onClick) this.props.onClick(this.props);
	},

	render: function () {
		return React.createElement(
			'div',
			{ key: this.props.key, className: 'record-image' },
			React.createElement(
				'a',
				{ href: '#', onClick: this.onClick },
				React.createElement('img', { src: this.props.path })
			)
		);
	}
});

module.exports = Image;