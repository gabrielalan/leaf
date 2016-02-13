'use strict';

var React = require('react'),
	Loading = require('Views/Common/Loading');

var Grid = React.createClass({

	getInitialState: function() {
		this.props.collection.on('sync', this.onCollectionChange);
		this.props.collection.on('request', this.onStartsRequest);

		return {
			items: this.props.collection.normalize(),
			loading: false
		};
	},
	componentWillUnmount: function() {
		this.props.collection.off('sync', this.onCollectionChange);
		this.props.collection.off('request', this.onStartsRequest);
	},

	onStartsRequest: function() {
		this.setState({
			loading: true
		});
	},

	onCollectionChange: function() {
		this.setState({
			items: this.props.collection.normalize(),
			loading: false
		});
	},

	mountHeader: function() {
		return this.props.columns.map(function(current){
			return (<th key={current.id}>{current.label}</th>);
		});
	},

	mountBody: function() {
		var me = this;

		return me.state.items.map(function(item) {
			return (<tr key={item[me.props.rowKeyAttr] + '_row'}>
				{me.mountRow(item)}
			</tr>);
		});
	},

	mountRow: function(item) {
		var me = this, value;

		return me.props.columns.map(function(current){
			value = current.type ? me.mountCellType(current, item) : item[current.modelAttr];

			return (<td key={item[me.props.rowKeyAttr] + current.id}>{value}</td>);
		});
	},

	mountCellType: function(column, row) {
		var Type = column.type;

		return <Type column={column} row={row} collection={this.props.collection} />
	},

	render: function(){
		return (
			<div className="grid-wrapper">
				<Loading loading={this.state.loading} />

				<table className="table table-striped">
					<thead>
						<tr>{this.mountHeader()}</tr>
					</thead>
					<tbody>{this.mountBody()}</tbody>
				</table>
			</div>
		)
	}
});

module.exports = Grid;