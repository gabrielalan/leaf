'use strict';

var TOKEN = 'userLocation';

module.exports = {
	set value(location) {
		window.localStorage.setItem(TOKEN, location);
	},

	get value() {
		return window.localStorage.getItem(TOKEN);
	},

	get isSaved() {
		return this.value !== null;		
	}
};