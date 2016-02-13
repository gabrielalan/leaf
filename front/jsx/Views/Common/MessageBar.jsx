'use strict';

var React = require('react'),
	Alert = require('Views/Common/Alert'),
	Central = require('Widgets/MessageBarCentral');

var MessageBar = React.createClass({

	getInitialState: function() {
		Central.on('change', this.onChangeMessage);

		return {
			show: false,
			message: Central.message
		};
	},

	onChangeMessage: function() {
		var me = this;

		me.clearHideTimeout();

		if (!me.state.show) {
			me.setMessage();
			me.setHideTimeout();
		} else {
			me.setState({
				show: false
			});

			setTimeout(function(){
				me.setMessage();
			}, 150);
		}
	},

	setMessage: function() {
		this.setState({
			show: true,
			message: Central.message
		});
	},

	clearHideTimeout: function() {
		clearTimeout(this.timeout);
	},

	setHideTimeout: function() {
		var me = this;

		me.timeout = setTimeout(function(){
			me.setState({
				show: false
			});
		}, 10000);
	},

	render: function(){
		return (
			<div className={"header-message-bar " + (this.state.show ? 'messaging' : '')} ref="container">
				<Alert type="info" show={true}>{this.state.message}</Alert>
			</div>
		)
	}
});

module.exports = MessageBar;