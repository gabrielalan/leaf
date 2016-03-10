'use strict';

const EventEmitter = require('events');

let knex = require('../../db/Knex');

class Entity extends EventEmitter {
	constructor(data) {
		super();

		this.values = {};

		this.map = {
			table: 'table_name',
			primaries: ['id'],
			fields: {
				'id': Number,
				'name': String
			}
		};
	}

	setTransactionObject(trx) {
		this.transaction = trx;
	}

	getCastedValue(field, value) {
		let type = this.map.fields[field];

		if (!type)
			throw new Error('Field not found: ' + field);

		return type(value);
	}

	override(obj) {
		for( var name in obj ) {
			this.set(name, obj[name]);
		}
	}

	getAllData() {
		return this.values;
	}

	set(field, value) {
		this.values[field] = this.getCastedValue(field, value);
	}

	save() {
		if (!this.values.id)
			return this.insert();

		return this.update();
	}

	insert() {
		let query = knex
			.insert(this.values);

		if (this.transaction)
			query.transacting(this.transaction);

		return query.into(this.map.table).then((id) => {
			this.emit('after:save');
			this.emit('after:insert');

			this.set(this.map.primaries[0], id);

			return this.values;
		});
	}

	update() {
		let query = knex(this.map.table)
			.where(this.getPrimaryKeyValues());

		if (this.transaction)
			query.transacting(this.transaction);

		return query.update(this.values).then(results => {
			this.emit('after:save');
			this.emit('after:update');

			return results;
		});
	}

	delete() {
		let query = knex(this.map.table)
			.where(this.getPrimaryKeyValues());

		if (this.transaction)
			query.transacting(this.transaction);

		return query.del().then(results => {
			this.emit('after:delete');

			return results;
		});
	}

	getPrimaryKeyValues() {
		let values = {};

		this.map.primaries.forEach((current) => {
			values[current] = this.values[current];
		});

		return values;
	}
}

module.exports = Entity;