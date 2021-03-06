'use strict';

var React = require('react'),
    Loading = require('Views/Common/Loading');

var Select = React.createClass({
	displayName: 'Select',


	getInitialState: function () {
		this.props.collection.on('sync', this.onCollectionChange);
		this.props.collection.on('request', this.onStartsRequest);

		return {
			items: [],
			loading: false
		};
	},

	onStartsRequest: function () {
		this.setState({
			loading: true
		});
	},

	onCollectionChange: function () {
		this.setState({
			items: this.getItems(),
			loading: false
		});
	},

	getItems: function () {
		var items = this.props.collection.normalize(this.props.filter);

		if (this.props.empty) {
			var empty = {};

			empty[this.props.map.name] = '';
			empty[this.props.map.value] = '';
			empty[this.props.map.id] = '';

			items = [empty].concat(items);
		}

		return items;
	},

	componentWillUnmount: function () {
		this.props.collection.off('sync', this.onCollectionChange);
		this.props.collection.off('request', this.onStartsRequest);
	},

	createItem: function (item) {
		var value = item[this.props.map.value],
		    name = item[this.props.map.name],
		    id = item[this.props.map.id];

		return React.createElement(
			'option',
			{ key: id, value: value },
			name
		);
	},

	getValue: function () {
		return this.refs.el.value;
	},

	setValue: function (value) {
		this.refs.el.value = value;
	},

	render: function () {
		var column = 12,
		    labelColumn = this.props.labelColumn || 2,
		    labelColumnClass = 'col-sm-' + labelColumn,
		    label;

		if (this.props.label) {
			column = column - labelColumn;
			label = React.createElement(
				'label',
				{ className: labelColumnClass + " control-label" },
				this.props.label
			);
		}

		return React.createElement(
			'div',
			{ className: 'form-group select' },
			React.createElement(Loading, { loading: this.state.loading }),
			label,
			React.createElement(
				'div',
				{ className: "col-sm-" + column },
				React.createElement(
					'select',
					{ ref: 'el', className: 'form-control' },
					this.state.items.map(this.createItem)
				)
			)
		);
	}
});

module.exports = Select;