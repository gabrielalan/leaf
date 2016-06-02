'use strict';

var React = require('react'),
    Utils = require('Common/Utils');

var Image = React.createClass({
	displayName: 'Image',


	onRemove: function (evt) {
		evt.preventDefault();

		if (this.props.onRemove) this.props.onRemove(this.props);

		return false;
	},

	render: function () {
		return React.createElement(
			'div',
			{ key: this.props.key, className: 'record-image' },
			React.createElement(
				'a',
				{ href: '#', onClick: this.onRemove },
				React.createElement(
					'span',
					null,
					'Remover?'
				),
				React.createElement('img', { src: Utils.baseUrl + '/' + this.props.path })
			)
		);
	}
});

module.exports = Image;