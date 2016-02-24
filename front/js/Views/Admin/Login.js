'use strict';

var React = require('react'),
    Loading = require('Views/Common/Loading'),
    Alert = require('Views/Common/Alert');

var Login = React.createClass({
	displayName: 'Login',

	getInitialState: function () {
		return {
			loading: false,
			error: false
		};
	},

	getFormData: function () {
		return {
			user: this.refs.user.value,
			password: this.refs.pass.value
		};
	},

	onSubmit: function (event) {
		var me = this;

		event.stopPropagation();
		event.preventDefault();

		me.setState({
			loading: true
		});

		$.ajax({
			url: '/admin/login',
			method: 'POST',
			data: me.getFormData(),
			success: function () {
				me.setState({
					loading: false,
					error: false
				});

				window.location.href = '/admin/';
			},
			error: function (response) {
				me.setState({
					loading: false,
					error: response.responseText || 'Desculpe, algum erro ocorreu, tente novamente mais tarde!'
				});
			}
		});

		return false;
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'login-form-container' },
			React.createElement(Loading, { loading: this.state.loading }),
			React.createElement(
				'h1',
				null,
				'Login'
			),
			React.createElement(
				'form',
				{ action: '#', className: 'form', method: 'POST', onSubmit: this.onSubmit },
				React.createElement(
					Alert,
					{ show: this.state.error },
					this.state.error
				),
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