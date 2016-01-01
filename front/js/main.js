'use strict';

var Flux = require("Flux"),
	Header = require('Widgets/Site/Header');

var header = new Header();

header.render( document.getElementById('wrapper') );

window.header = header;