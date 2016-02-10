'use strict';

var connPool = require('../../db/ConnectionPool');

module.exports = {

	getSession(sid, limitAge) {
		let deferred = Promise.defer(),
			SQL = 'SELECT * FROM sessions WHERE sid = ?', values = [sid];

		if (limitAge) {
			values.push(limitAge);
			SQL += ' AND expire > ?';
		}

		connPool.get().then((connection) => {
			connection.query(SQL, values, (err, rows) => {
				if( err )
					deferred.reject(err);

				deferred.resolve(rows[0]);

				connection.release();
			});
		});

		return deferred.promise;
	}
};