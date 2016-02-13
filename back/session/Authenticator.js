'use strict';

let UsersStore = require('../models/store/Users'),
	UserSessionsStore = require('../models/store/UserSessions'),
	UserSessionEntity = require('../models/entities/UserSession');

class Authenticator {

	constructor(request) {
		this.data = request.body;
		this.request = request;
	}

	authenticate() {
		let defer = Promise.defer(),
			sid = this.request.sessionID;

		UsersStore.getUser(this.data.user, this.data.password).then((data) => {
			if (!data)
				return defer.reject(new Error('Usuário não encontrado'));

			UserSessionsStore.getCurrentSession(data.id).then((row) => {
				if (row)
					return UserSessionsStore.removeUserSession(data.id).then(() => {
						this.insertUserSession(data, defer);
					});

				this.insertUserSession(data, defer);
			}).catch((err) => {
				return defer.reject(err);
			});
		}).catch((err) => {
			return defer.reject(err);
		});

		return defer.promise;
	}

	insertUserSession(user, deferred) {
		let entity = new UserSessionEntity();

		entity.override({
			sid: this.request.sessionID,
			user_id: user.id
		});

		entity.save().then(() => {
			deferred.resolve(user);
		}).catch((err) => {
			deferred.reject(err);
		});
	}
}

module.exports = Authenticator;