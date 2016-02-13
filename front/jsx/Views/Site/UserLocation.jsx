'use strict';

var React = require('react'),
	Modal = require('Views/Common/Modal'),
	Storage = require('Common/UserLocationStorage'),
	UserLocationCollection = require('Collections/UserLocation'),
	Select = require('Views/Common/Select');

var UserLocation = React.createClass({

	getInitialState: function() {
		return {
			show: false
		};
	},

	componentDidMount: function() {
		if (!Storage.isSaved) {
			this.setState({
				show: true
			});

			UserLocationCollection.fetch();
		}
	},

	onButtonClick: function() {
		if (this.state.loading)
			return false;

		Storage.value = this.refs.select.getValue();

		this.setState({
			show: false
		});
	},

	getModalOptions: function() {
		return {
			'backdrop': 'static',
			'keyboard': false,
			'show': true
		};
	},

	render: function(){
		return (
			<Modal ref="modal" className="userLocation" show={this.state.show} options={this.getModalOptions()}>
				<div className="modal-header">
					<h4 className="modal-title">Escolha sua região</h4>
				</div>
				<div className="modal-body">
					<form className="form-horizontal">
						<Select ref="select" collection={UserLocationCollection} id="id" name="name" value="value" />
					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-primary save-location" onClick={this.onButtonClick}>Salvar</button>
				</div>
			</Modal>
		)
	}
});

module.exports = UserLocation;