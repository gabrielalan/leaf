'use strict';

var numeral = require('numeral'),
	config = require('numeral/languages/pt-br');

numeral.language('pt-br', config);

numeral.language('pt-br');

module.exports = numeral;