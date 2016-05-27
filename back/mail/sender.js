const poolConfig = {
	pool: true,
	host: 'smtp.leafsc.com.br',
	port: 587,
	auth: {
		user: 'leaf@leafsc.com.br',
		pass: 'leaf1111'
	}
};
const fs = require('fs');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(poolConfig);

const contactHtml = fs.readFileSync('back/templates/mail/contact.html', "utf-8");

exports.sendContact = transporter.templateSender({
	subject: 'Contact from {{username}}!',
	text: 'Olá, você recebeu uma nova mensagem de contato. {{username}}, Please go here to reset your password: {{ reset }}',
	html: contactHtml
}, {
	from: 'leaf@leafsc.com.br'
});