'use strict';

var numeral = require('numeral'),
	config = require('numeralPtBr');

numeral.language('pt-br', config);

numeral.language('pt-br');

module.exports = numeral;