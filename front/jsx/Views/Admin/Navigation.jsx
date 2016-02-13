'use strict';

var React = require('react'),
	RouteManager = require('Routes/Manager'),
	NavBar = require('Views/Common/NavBar');

var Navigation = React.createClass({

	getInitialState: function() {
		return {
			activePath: window.location.hash.slice(1),
			menu: [
				{
					id: 'home',
					label: 'Home',
					path: ''
				},
				{
					id: 'categories',
					label: 'Categorias',
					path: 'categories'
				}
			]
		}
	},

	onMenuItemClick: function(e) {
		e.stopPropagation();
		e.preventDefault();

		let path = e.currentTarget.getAttribute('href');

		RouteManager.dispatch(path);

		this.setState({
			activePath: path
		});

		return false;
	},

	onClickLogout: function(event) {
		$.ajax({
			url: '/admin/logout',
			method: 'POST',
			complete: function() {
				window.location.reload();
			}
		});
	},

	render: function(){
		var me = this;

		return (
			<NavBar brand="Leaf Admin">
				<ul className="nav navbar-nav">
					{me.state.menu.map(function(current){
						return <li key={current.id} className={me.state.activePath === current.path ? 'active' : ''}><a href={current.path} onClick={me.onMenuItemClick}>{current.label}</a></li>;
					})}
				</ul>

				<ul className="nav navbar-nav navbar-right">
					<li><a href="#">PEGAR DO BACK</a></li>
					<li><a href="#" onClick={this.onClickLogout}>Sair</a></li>
				</ul>
			</NavBar>
		)
	}
});

module.exports = Navigation;