'use strict';

var numeral = require('Common/NumeralInstance');

module.exports = function currencyFormatter(value) {
	return numeral(value).format('$0.00');
};