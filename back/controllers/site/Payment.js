'use strict';

var Controller = require('../Controller'),
	GeneralConfig = require('../../GeneralConfiguration'),
	PaymentAPI = require('../../payment/Mediator');

class Payment extends Controller {

	redirect( req, res ) {
		res.send({});
	}

	notification( req, res ) {
		PaymentAPI.notification(req.body.notificationCode)
			.then((result) => {
				res.send(result);
			})
			.catch((error) => {
				console.log(error);
				res.send(error);
			});
	}

	checkout( req, res ) {
		let data = {
			checkout: {
				currency: 'BRL',
				reference: 123123,
				notificationURL: GeneralConfig.getBaseUrl() + 'rest/payment/notification',
				//redirectURL: GeneralConfig.getBaseUrl() + 'rest/payment/redirect',
				items: {
					item: [
						{
							id: '123',
							description: 'asdasdasd',
							amount: '100.50',
							quantity: 1,
							weight: 100
						},
						{
							id: '123',
							description: 'asdasdasd',
							amount: '100.50',
							quantity: 1,
							weight: 100
						}
					]
				}
			}
		};

		PaymentAPI.checkout(data)
			.then((result) => {
				res.send(result);
			})
			.catch((error) => {
				res.send(error);
			});
	}
}

module.exports = Payment;