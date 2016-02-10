'use strict';

var session = require('express-session'),
	Store = (session.session) ? session.session.Store : session.Store,
	SessionStore = require('../models/store/Sessions'),
	SessionEntity = require('../models/entities/Session'),
	EntityManager = require('../models/entities/Manager');

var MEMORY = {},
	DEFAULT_MAX_AGE = 60 * 60 * 1000,
	LAST_TOUCH = 0;

class LeafStore extends Store {

	set(sid, data, callback) {
		let session = JSON.stringify(data),
			now = Date.now(),
			maxAge = data.cookie.maxAge,
			expire = maxAge ? now + maxAge : now + DEFAULT_MAX_AGE;

		this.insertSession({ sid, session, expire }, callback);
	}

	get(sid, callback) {
		let now = Date.now();

		this.getSession(sid, now).then((result) => {
			if (!result)
				return callback();

			callback(null, JSON.parse(result.session));
		});
	}

	touch(sid, data, callback) {
		let isValid = data && data.cookie && data.cookie.expires;

		if (!isValid)
			callback();

		let expire = new Date(data.cookie.expires).getTime();
		let session = JSON.stringify(data);
//console.log('touch');

		this.updateSession({ sid, session, expire }, callback);
		//callback(null, data);
	}

	destroy(sid, callback){

		this.getSession(sid, now).then((result) => {
			if (!result)
				return callback(null, true);

			let entity = new SessionEntity();

			entity.override(result);

			entity.delete();

			callback(null, true);
		});
	}

	insertSession(data, callback) {
		let entity = new SessionEntity();

		entity.override(data);

		entity.insert().then(() => {
			callback(null, entity.getAllData());
		}).catch((error) => {
			callback(error);
		});
	}

	updateSession(data, callback) {
		this.getSession(data.sid).then((result) => {
			if (!result || !result.id)
				return callback();

			data.id = result.id;

			let entity = new SessionEntity();

			entity.override(data);

			entity.update().then(() => {
				callback(null);
			}).catch((error) => {
				callback(error);
			});
		});
	}

	getSession(sid, now) {
		return SessionStore.getSession(sid, now);
	}
}

module.exports = LeafStore;