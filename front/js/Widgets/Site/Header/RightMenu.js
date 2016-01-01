'use strict';

var Navigation = require('Widgets/Navigation'),
	NavigationItem = require('Widgets/Navigation/NavigationItem');

var RightMenu = Navigation.extends({

	name: 'RightMenu',

	items: [
		new NavigationItem({
			label: 'Registrar',
			active: true
		}),
		new NavigationItem({
			label: 'Fazer login'
		}),
		new NavigationItem({
			label: 'Carrinho',
			rightIcon: 'icon-cart'
		})
	]
});

module.exports = RightMenu;