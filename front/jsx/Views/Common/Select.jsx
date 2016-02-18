'use strict';

var React = require('react'),
	Loading = require('Views/Common/Loading');

var Select = React.createClass({

	getInitialState: function() {
		this.props.collection.on('sync', this.onCollectionChange);
		this.props.collection.on('request', this.onStartsRequest);

		return {
			items: [],
			loading: false
		};
	},

	onStartsRequest: function() {
		this.setState({
			loading: true
		});
	},

	onCollectionChange: function() {
		this.setState({
			items: this.getItems(),
			loading: false
		});
	},

	getItems: function() {
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

	componentWillUnmount: function() {
		this.props.collection.off('sync', this.onCollectionChange);
		this.props.collection.off('request', this.onStartsRequest);
	},

	createItem: function(item) {
		var value = item[this.props.map.value], name = item[this.props.map.name], id = item[this.props.map.id];

		return <option key={id} value={value}>{name}</option>
	},

	getValue: function() {
		return this.refs.el.value;
	},

	setValue: function(value) {
		this.refs.el.value = value;
	},

	render: function(){
		var column = 12, labelColumn = this.props.labelColumn || 2, labelColumnClass = 'col-sm-' + labelColumn, label;

		if (this.props.label) {
			column = column - labelColumn;
			label = <label className={labelColumnClass + " control-label"}>{this.props.label}</label>;
		}

		return (
			<div className="form-group select">
				<Loading loading={this.state.loading} />
				{label}
				<div className={"col-sm-" + column}>
					<select ref="el" className="form-control">{this.state.items.map(this.createItem)}</select>
				</div>
			</div>
		)
	}
});

module.exports = Select;