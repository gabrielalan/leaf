'use strict';

//Load common used libs
require('jquery');
require('bootstrap');

// Initiate all common widgets and classes
var Routes = require('Controllers/Admin'),
	RouteManager = require('Routes/Manager'),
	React = require('react'),
	ReactDOM = require('ReactDOM'),
	Header = require('Views/Admin/Header');

RouteManager.setRoutes(Routes);

ReactDOM.render(React.createElement(Header, null), document.querySelector(('#header')));