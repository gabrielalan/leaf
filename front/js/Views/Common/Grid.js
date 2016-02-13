'use strict';

var React = require('react'),
    Loading = require('Views/Common/Loading');

var Grid = React.createClass({
	displayName: 'Grid',

	getInitialState: function () {
		this.props.collection.on('sync', this.onCollectionChange);
		this.props.collection.on('request', this.onStartsRequest);

		return {
			items: this.props.collection.normalize(),
			loading: false
		};
	},
	componentWillUnmount: function () {
		this.props.collection.off('sync', this.onCollectionChange);
		this.props.collection.off('request', this.onStartsRequest);
	},

	onStartsRequest: function () {
		this.setState({
			loading: true
		});
	},

	onCollectionChange: function () {
		this.setState({
			items: this.props.collection.normalize(),
			loading: false
		});
	},

	mountHeader: function () {
		return this.props.columns.map(function (current) {
			return React.createElement(
				'th',
				{ key: current.id },
				current.label
			);
		});
	},

	mountBody: function () {
		var me = this;

		return me.state.items.map(function (item) {
			return React.createElement(
				'tr',
				{ key: item[me.props.rowKeyAttr] + '_row' },
				me.mountRow(item)
			);
		});
	},

	mountRow: function (item) {
		var me = this,
		    value;

		return me.props.columns.map(function (current) {
			value = current.type ? me.mountCellType(current, item) : item[current.modelAttr];

			return React.createElement(
				'td',
				{ key: item[me.props.rowKeyAttr] + current.id },
				value
			);
		});
	},

	mountCellType: function (column, row) {
		var Type = column.type;

		return React.createElement(Type, { column: column, row: row, collection: this.props.collection });
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'grid-wrapper' },
			React.createElement(Loading, { loading: this.state.loading }),
			React.createElement(
				'table',
				{ className: 'table table-striped' },
				React.createElement(
					'thead',
					null,
					React.createElement(
						'tr',
						null,
						this.mountHeader()
					)
				),
				React.createElement(
					'tbody',
					null,
					this.mountBody()
				)
			)
		);
	}
});

module.exports = Grid;