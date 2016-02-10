'use strict';

var React = require('react');

var Login = React.createClass({

	onSubmit: function() {
	debugger;
	},

	render: function() {
		return (
			<div className="login-form-container">
				<h1>Login</h1>

				<form action="#" className="form" method="POST" onSubmit={this.onSubmit}>
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