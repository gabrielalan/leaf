'use strict';

var Flux = require("Flux"),
	Header = require('Widgets/Site/Header');

var header = new Header();

header.render( document.querySelector('#wrapper .header-wrapper') );

window.header = header;