'use strict';

class Validator {

	createSession(authenticator) {
		let defer = Promise.defer();

		authenticator.authenticate().then((user) => {
			this.setSession(user);

			defer.resolve(true);
		}).catch((err) => {
			defer.reject(err);
		});

		return defer.promise;
	}

	setSession(user) {
		this.request.session.user = user;
	}

	isValid() {
		return this.request.session.user;
	}

	setRequest(req) {
		this.request = req;
	}

	setResponse(res) {
		this.response = res;
	}
}

module.exports = Validator;