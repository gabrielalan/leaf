'use strict';

var React = require('react');

var Modal = React.createClass({

	hide: function() {
		this.getContainer().modal('hide');
	},

	show: function() {
		this.getContainer().modal(this.props.options);
	},

	componentWillReceiveProps: function(newProps){
		if (newProps.show)
			this.show();
		else
			this.hide();
	},

	getContainer: function() {
		return $(this.refs.container);
	},

	render: function(){
		return (
			<div ref="container" className={"modal fade " + this.props.className} tabIndex="-1">
				<div className="modal-dialog">
					<div className="modal-content">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Modal;