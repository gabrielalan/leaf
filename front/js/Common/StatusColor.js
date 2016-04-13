'use strict';

module.exports = function getStatusColor(status) {
	switch(status) {
		case 3:
		case 4:
			return 'info';
		case 6:
		case 7:
		case 8:
		case 9:
			return 'danger';
		default:
			return '';
	}
};