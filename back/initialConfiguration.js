'use strict';

let handlebars = require('handlebars'),
	fs = require('fs');

let carousel 	= fs.readFileSync('back/templates/site/partials/carousel.html', "utf-8"),
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

handlebars.registerHelper('baseUrl', function(person) {
  return 'http://localhost/';
});

module.exports = {};