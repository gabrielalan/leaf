'use strict';

let knex = require('../../db/Knex');

class UserSessions {

	//'DELETE user_sessions FROM user_sessions us INNER JOIN sessions s ON s.sid = us.sid WHERE us.sid = ? AND s.expire > ?'

	removeUserSession(user_id) {
		return knex('user_sessions')
			.where({user_id})
			.delete();
	}

	getCurrentSession(user_id) {
		let now = new Date().toISOString().slice(0, 19).replace('T', ' ');

		return knex('user_sessions')
			.innerJoin('sessions', 'sessions.sid', 'user_sessions.sid')
			.where('user_sessions.user_id', '=', user_id)
			.andWhereRaw('CAST(? as DATETIME) <= expired', now)
			.select('*')
			.then((results) => {
				return results[0];
			});
	}
}

module.exports = new UserSessions();