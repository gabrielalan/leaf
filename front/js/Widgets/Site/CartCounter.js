'use strict';

var Widget = require('Widgets/Widget'),
	template = require('Templates/site/cartCounter'),
	Flux = require('Flux');

var CartCounter = Widget.extends({

	name: 'CartCounter',

	template: template,

	classes: {
		ZERO_ITEMS: 'zero-items',
		NEW_ITEMS: 'new-items'
	},

	store: Flux.store('CartTotalStore'),

	oldValue: null,

	render: function() {
		this.parent.render.apply(this, arguments);

		Flux.actions.loadCartTotal();
	},

	setZero: function() {
		var el = this.getEl();

		el.classList.add(this.classes.ZERO_ITEMS);
	},

	setValue: function(total) {
		var me = this, el = this.getEl();

		el.textContent = total;

		el.classList.remove(me.classes.ZERO_ITEMS);
		el.classList.remove(me.classes.NEW_ITEMS);

		if( me.oldValue === total )
			return false;

		me.oldValue = total;

		setTimeout(function(){
			el.classList.add(me.classes.NEW_ITEMS);
		}, 100);
	},

	updateView: function() {
		var total = this.store.data.total;

		if( total <= 0 )
			this.setZero();
		else
			this.setValue(total);
	}
});

module.exports = CartCounter;