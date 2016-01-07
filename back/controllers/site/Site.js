'use strict';

var Controller = require('../Controller'),
	fs = require('fs'),
	handlebars = require('handlebars');

class Site extends Controller {

	constructor() {
		super();

		this.registerPartials();
	}

	registerPartials() {
		var carousel 	= fs.readFileSync('back/templates/site/partials/carousel.html', "utf-8"),
			who 		= fs.readFileSync('back/templates/site/partials/who.html', "utf-8"),
			header 		= fs.readFileSync('back/templates/site/partials/header.html', "utf-8"),
			menu 		= fs.readFileSync('back/templates/site/partials/menu.html', "utf-8"),
			othermenus 	= fs.readFileSync('back/templates/site/partials/othermenus.html', "utf-8"),
			layout 		= fs.readFileSync('back/templates/site/layout.html', "utf-8");

		// static partials
		handlebars.registerPartial('carousel', carousel);
		handlebars.registerPartial('who', who);
		handlebars.registerPartial('header', header);
		handlebars.registerPartial('menu', menu);
		handlebars.registerPartial('othermenus', othermenus);

		// layout
		handlebars.registerPartial('layout', layout);
	}

	home( req, res ) {
		var home = require('../../templates/site/pages/home');

		var html = home({
			carousel: [
				[
					{
						img: 'img/cookie.jpg',
						name: 'Cookie',
						price: '129,99'
					},
					{
						img: 'img/cookie.jpg',
						name: 'Cookie',
						price: '129,99'
					},
					{
						img: 'img/cookie.jpg',
						name: 'Cookie',
						price: '129,99'
					}
				],
				[
					{
						img: 'img/cookie.jpg',
						name: 'Cookie',
						price: '129,99'
					},
					{
						img: 'img/cookie.jpg',
						name: 'Cookie',
						price: '129,99'
					}
				]
			],
			categories: [
				{
					id: 'asdasd',
					name: 'Torradas',
					desc: 'Lorem ipsum is simply dummy text of the',
					img: 'img/dropdown.jpg'
				},
				{
					id: 'asdasd',
					name: 'Grãos',
					desc: 'Lorem ipsum is simply dummy text of the',
					img: 'img/dropdown.jpg'
				},
				{
					id: 'asdasd',
					name: 'Biscoitos',
					desc: 'Lorem ipsum is simply dummy text of the',
					img: 'img/dropdown.jpg'
				},
				{
					id: 'asdasd',
					name: 'Integral',
					desc: 'Lorem ipsum is simply dummy text of the',
					img: 'img/dropdown.jpg',
					childs: [
						{
							id: 'asdasd',
							name: 'Torradas',
							desc: 'Lorem ipsum is simply dummy text of the',
							img: 'img/dropdown.jpg'
						},
						{
							id: 'asdasd',
							name: 'Grãos',
							desc: 'Lorem ipsum is simply dummy text of the',
							img: 'img/dropdown.jpg'
						},
						{
							id: 'asdasd',
							name: 'Biscoitos',
							desc: 'Lorem ipsum is simply dummy text of the',
							img: 'img/dropdown.jpg'
						}
					]
				}
			]
		});

		res.send(html);
	}
}

module.exports = Site;