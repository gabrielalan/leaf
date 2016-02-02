'use strict';

let connPool = require('../../db/ConnectionPool');

class Entity {
	constructor() {
		this.values = {};

		this.map = {
			table: 'table_name',
			pk: 'id',
			fields: {
				'id': Number,
				'name': String
			}
		};
	}

	setConnection(connection) {
		this.connection = connection;
	}

	getConnection() {
		let defer = Promise.defer();

		if (this.connection)
			defer.resolve(this.connection);
		else
			connPool.get().then((connection) => {
				defer.resolve(connection);
			});

		return defer.promise;
	}

	getCastedValue(field, value) {
		let type = this.map.fields[field];

		if (!type)
			throw new Error('Field not found: ' + field);

		//let name = type.toString(),
		//	quoted = value;
		//
		//if( /String/.test(name) )
		//	quoted = JSON.stringify(value);

		return type(value);
	}

	override(obj) {
		for( var name in obj ) {
			this.set(name, obj[name]);
		}
	}

	set(field, value) {
		this.values[field] = this.getCastedValue(field, value);
	}

	save() {
		if (!this.values.id)
			return this.insert();

		return this.update();
	}

	mountInsertQuery() {
		let query = 'INSERT INTO ' + this.map.table + ' SET ', sets = [], values = [];

		for( var field in this.values ) {
			values.push(this.values[field]);
			sets.push(field + '=?');
		}

		query += sets.join(', ');

		return {query, values};
	}

	insert() {
		let data = this.mountInsertQuery();

		return this.execute(data);
	}

	update() {
		throw new Error('Not implemented');
	}

	delete() {
		throw new Error('Not implemented');
	}

	execute(data) {
		let defer = Promise.defer();

		console.log(data);

		this.getConnection().then((connection) => {
			connection.query(data.query, data.values, (err, result) => {
				if (err)
					defer.reject(err);

				defer.resolve(result);
			});
		});

		return defer.promise;
	}
}

module.exports = Entity;