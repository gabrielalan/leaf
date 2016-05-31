const poolConfig = require('../config.json').smtp;
const renderer = require('./renderer');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(poolConfig);

exports.sendOrderUpdate = transporter.templateSender({
	render: renderer('back/templates/mail/order_updated.html')
}, {
	from: 'leaf@leafsc.com.br'
});

exports.sendContact = transporter.templateSender({
	subject: 'Contact from {{name}}!',
	render: renderer('back/templates/mail/contact.html')
}, {
	from: 'leaf@leafsc.com.br'
});