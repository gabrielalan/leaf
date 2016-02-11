'use strict';

var connPool = require('../../db/ConnectionPool'),
	Store = require('./Store');

class UserSessions extends Store {

	deleteOldUserSessions(sid) {
		let SQL = 'DELETE user_sessions FROM user_sessions us INNER JOIN sessions s ON s.sid = us.sid WHERE us.sid = ? AND s.expire > ?',
			values = [sid, Date.now()];

		return this.execute(SQL, values);
	}

	getCurrentSession(user_id) {
		let deferred = Promise.defer(),
			SQL = 'SELECT us.* FROM user_sessions us ' +
					'INNER JOIN sessions s ON s.sid = us.sid ' +
					'WHERE us.user_id = ? AND s.expire > ?',
			values = [user_id, Date.now()];

		this.execute(SQL, values).then((rows) => {
			deferred.resolve(rows[0]);
		}).catch((err) => {
			deferred.reject(err);
		});

		return deferred.promise;
	}
}

module.exports = new UserSessions();