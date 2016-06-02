'use strict';

var React = require('react');

var Modal = React.createClass({
	displayName: 'Modal',


	hide: function () {
		this.getContainer().modal('hide');
	},

	show: function () {
		this.getContainer().modal(this.props.options);
	},

	componentWillReceiveProps: function (newProps) {
		if (newProps.show) this.show();else this.hide();
	},

	getContainer: function () {
		return $(this.refs.container);
	},

	render: function () {
		return React.createElement(
			'div',
			{ ref: 'container', className: "modal fade " + this.props.className, tabIndex: '-1' },
			React.createElement(
				'div',
				{ className: 'modal-dialog' },
				React.createElement(
					'div',
					{ className: 'modal-content' },
					this.props.children
				)
			)
		);
	}
});

module.exports = Modal;