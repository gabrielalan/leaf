const poolConfig = require('../config.json').smtp;
const renderer = require('./renderer');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(poolConfig);

const defaults = {
	from: poolConfig.auth.user
}

exports.sendOrderUpdate = transporter.templateSender({
	render: renderer('back/templates/mail/order_updated.html')
}, defaults);

exports.sendHowToBe = transporter.templateSender({
	render: renderer('back/templates/mail/how_to_be.html')
}, defaults);

exports.sendContact = transporter.templateSender({
	subject: 'Contact from {{name}}!',
	render: renderer('back/templates/mail/contact.html')
}, defaults);