'use strict';

module.exports = function dateFormatter(value) {
	if (!value)
		return '----';

	return new Date(value).toLocaleString();
};