'use strict';

var React = require('react'),
    Modal = require('Views/Common/Modal'),
    Loading = require('Views/Common/Loading'),
    Storage = require('Common/UserLocationStorage'),
    UserLocationCollection = require('Collections/UserLocation'),
    Select = require('Views/Common/Select');

var UserLocation = React.createClass({
	displayName: 'UserLocation',

	getInitialState: function () {
		UserLocationCollection.on('sync', this.onCollectionChange);
		UserLocationCollection.on('request', this.onStartsRequest);

		return {
			show: false,
			items: [],
			loading: false
		};
	},

	onStartsRequest: function () {
		this.setState({
			loading: true
		});
	},

	onCollectionChange: function (collection) {
		this.setState({
			items: collection.normalize(),
			loading: false
		});
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
					'div',
					{ className: 'form-group' },
					React.createElement(Loading, { loading: this.state.loading }),
					React.createElement(Select, { ref: 'select', items: this.state.items })
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