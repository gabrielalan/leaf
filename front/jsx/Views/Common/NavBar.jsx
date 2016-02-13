'use strict';

var React = require('react');

var NavBar = React.createClass({

	render: function(){
		var className = 'navbar navbar-default navbar-fixed-top';

		if (this.props.inverse)
			className += ' navbar-inverse';

		return (
			<nav className={className}>
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">{this.props.brand}</a>
					</div>
					<div className="collapse navbar-collapse">{this.props.children}</div>
				</div>
			</nav>
		)
	}
});

module.exports = NavBar;