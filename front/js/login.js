'use strict';

//Load common used libs
require('jquery');
require('bootstrap');

var React = require('react'),
	ReactDOM = require('ReactDOM'),
	Login = require('Views/Admin/Login');

ReactDOM.render(React.createElement(Login, null), document.querySelector(('#wrapper')));