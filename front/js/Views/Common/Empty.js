'use strict';

var React = require('react');

var Empty = React.createClass({
	displayName: 'Empty',


	render: function () {

		return React.createElement(
			'div',
			{ className: 'empty-state' },
			React.createElement(
				'p',
				{ className: 'disabled' },
				'Nenhum registro encontrado'
			)
		);
	}
});

module.exports = Empty;