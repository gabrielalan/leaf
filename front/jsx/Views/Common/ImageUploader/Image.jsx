'use strict';

var React = require('react');

var Image = React.createClass({

	onClick: function(evt) {
		evt.preventDefault();

		if (this.props.onClick)
			this.props.onClick(this.props);

		return false;
	},

	render: function(){
		return (
			<div key={this.props.key} className="record-image">
				<a href="#" onClick={this.onClick}>
					<span>Remover?</span>
					<img src={this.props.path} />
				</a>
			</div>
		)
	}
});

module.exports = Image;