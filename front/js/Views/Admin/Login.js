'use strict';

var React = require('react');

var Login = React.createClass({
	displayName: 'Login',

	onSubmit: function () {
		debugger;
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'login-form-container' },
			React.createElement(
				'h1',
				null,
				'Login'
			),
			React.createElement(
				'form',
				{ action: '#', className: 'form', method: 'POST', onSubmit: this.onSubmit },
				React.createElement(
					'div',
					{ className: 'input-group' },
					React.createElement('input', { type: 'text', className: 'form-control input-lg', placeholder: 'Usuário', ref: 'user' }),
					React.createElement(
						'div',
						{ className: 'input-group-addon' },
						'U'
					)
				),
				React.createElement(
					'div',
					{ className: 'input-group' },
					React.createElement('input', { type: 'password', className: 'form-control input-lg', placeholder: 'Senha', ref: 'pass' }),
					React.createElement(
						'div',
						{ className: 'input-group-addon' },
						'P'
					)
				),
				React.createElement(
					'button',
					{ type: 'submit', className: 'btn btn-block btn-lg btn-success' },
					'Entrar'
				)
			)
		);
	}
});

module.exports = Login;