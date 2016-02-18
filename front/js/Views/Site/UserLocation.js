'use strict';

var React = require('react'),
    Modal = require('Views/Common/Modal'),
    Storage = require('Common/UserLocationStorage'),
    UserLocationCollection = require('Collections/UserLocation'),
    Select = require('Views/Common/Select');

var UserLocation = React.createClass({
	displayName: 'UserLocation',

	getInitialState: function () {
		return {
			show: false
		};
	},

	componentDidMount: function () {
		if (!Storage.isSaved) {
			this.setState({
				show: true
			});

			UserLocationCollection.fetch();
		}
	},

	onButtonClick: function () {
		if (this.state.loading) return false;

		Storage.value = this.refs.select.getValue();

		this.setState({
			show: false
		});
	},

	getModalOptions: function () {
		return {
			'backdrop': 'static',
			'keyboard': false,
			'show': true
		};
	},

	getSelectMap: function () {
		return {
			id: 'id',
			name: 'name',
			value: 'id'
		};
	},

	render: function () {
		return React.createElement(
			Modal,
			{ ref: 'modal', className: 'userLocation', show: this.state.show, options: this.getModalOptions() },
			React.createElement(
				'div',
				{ className: 'modal-header' },
				React.createElement(
					'h4',
					{ className: 'modal-title' },
					'Escolha sua região'
				)
			),
			React.createElement(
				'div',
				{ className: 'modal-body' },
				React.createElement(
					'form',
					{ className: 'form-horizontal' },
					React.createElement(Select, { ref: 'select', collection: UserLocationCollection, map: this.getSelectMap() })
				)
			),
			React.createElement(
				'div',
				{ className: 'modal-footer' },
				React.createElement(
					'button',
					{ type: 'button', className: 'btn btn-primary save-location', onClick: this.onButtonClick },
					'Salvar'
				)
			)
		);
	}
});

module.exports = UserLocation;