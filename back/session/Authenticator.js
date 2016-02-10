'use strict';

class Authenticator {

	isValid() {
		return this.validateLogin();
	}

	validateLogin() {
		if (!this.request.session.data)
			this.request.session.data = [1,2,3];

		return false;
	}

	setRequest(req) {
		this.request = req;
	}

	setResponse(res) {
		this.response = res;
	}
}

module.exports = Authenticator;