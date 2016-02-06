'use strict';

var React = require('react');

var Loading = React.createClass({

	getContainer: function() {
		return $(this.refs.container);
	},

	render: function(){
		var className = 'load-mask';

		if (this.props.fixed)
			className += ' load-fixed';

		if (this.props.loading)
			className += ' loading';
//<svg className="icon"><use xlink:href="/img/iconmoon/symbol-defs.svg#icon-spinner"></use></svg>
		return (
			<div className={className} ref="container">
				<span className="spined icon icon-spinner"></span>
			</div>
		)
	}
});

module.exports = Loading;