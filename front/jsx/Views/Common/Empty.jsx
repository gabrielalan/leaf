'use strict';

var React = require('react');

var Empty = React.createClass({

	render: function(){

		return (
			<div className="empty-state">
				<p className="disabled">Nenhum registro encontrado</p>
			</div>
		)
	}
});

module.exports = Empty;