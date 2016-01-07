'use strict';

class Controller {

	getAction(action) {
		if (typeof this[action] === 'function')
			return this[action];
		else
			throw new Error('Action does not exists');
	}
}

module.exports = Controller;