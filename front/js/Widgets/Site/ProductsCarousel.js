'use strict';

var Klass = require('Klass');

var ProductsCarousel = Klass.create({

	name: 'ProductsCarousel',

	pager: null,

	page: 0,

	max: 1,

	construct: function(pager) {
		this.pager = $(pager);

		this.carousel = $('#' + this.pager.data('pc-pager'));

		this.max = this.carousel.find('.pc-holder').length - 1;

		this.bindEvents();
	},

	bindEvents: function() {
		this.pager.on('click', 'a', this.onPagerClick.bind(this));
	},

	getHolderWidth: function() {
		var holder = this.carousel.find('.pc-holder'), margin = parseInt(holder.css('margin-right')) + parseInt(holder.css('margin-left'));

		return parseInt(holder.width()) + margin;
	},

	getWalker: function() {
		return this.carousel.find('.pc-walker');
	},

	next: function() {
		if( this.page >= this.max )
			return false;

		this.page++;

		this.walk();
	},

	previous: function() {
		if( this.page <= 0 )
			return false;

		this.page--;

		this.walk();
	},

	walk: function( margin ) {
		var width = this.getHolderWidth(), margin = -(this.page * width);

		this.getWalker().css('margin-left', margin + 'px');
	},

	onPagerClick: function(event) {
		event.preventDefault();

		var cls = event.currentTarget.className;

		if( cls.match(/left/gi) )
			this.previous();
		else
			this.next();

		return false;
	}
});

module.exports = ProductsCarousel;