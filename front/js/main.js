'use strict';

var Flux = require("Flux"),
	Header = require('Widgets/Header');

var header = new Header();

header.render( document.getElementById('wrapper') );