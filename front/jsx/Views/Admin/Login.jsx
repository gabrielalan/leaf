'use strict';

var React = require('react'),
	Loading = require('Views/Common/Loading'),
	Alert = require('Views/Common/Alert');

var Login = React.createClass({

	getInitialState: function() {
		return {
			loading: false,
			error: false
		}
	},

	getFormData: function() {
		return {
			user: this.refs.user.value,
			password: this.refs.pass.value
		}
	},

	onSubmit: function(event) {
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
			success: function() {
				me.setState({
					loading: false,
					error: false
				});

				window.location.reload();
			},
			error: function(response) {
				me.setState({
					loading: false,
					error: response.responseText || 'Desculpe, algum erro ocorreu, tente novamente mais tarde!'
				});
			}
		});

		return false;
	},

	render: function() {
		return (
			<div className="login-form-container">
				<Loading loading={this.state.loading} />

				<h1>Login</h1>

				<form action="#" className="form" method="POST" onSubmit={this.onSubmit}>
					<Alert show={this.state.error}>{this.state.error}</Alert>

					<div className="input-group">
						<input type="text" className="form-control input-lg" placeholder="Usuário" ref="user" />
						<div className="input-group-addon">U</div>
					</div>
					<div className="input-group">
						<input type="password" className="form-control input-lg" placeholder="Senha" ref="pass" />
						<div className="input-group-addon">P</div>
					</div>

					<button type="submit" className="btn btn-block btn-lg btn-success">Entrar</button>
				</form>
			</div>
		);
	}
});

module.exports = Login;