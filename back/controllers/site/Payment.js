'use strict';

var Controller = require('../Controller'),
	GeneralConfig = require('../../GeneralConfiguration'),
	PaymentAPI = require('../../payment/Mediator'),
	defaultError = require('../../logger/HttpUtils').defaultHttpResponseError,
	OrderStore = require('../../models/store/Orders'),
	CartStore = require('../../models/store/Carts'),
	CartItemStore = require('../../models/store/CartItems');

class Payment extends Controller {

	notification( req, res ) {
		PaymentAPI.notification(req.body.notificationCode)
			.then((result) => {
				console.log('notification');
				console.log(result);
				res.send(result);
			})
			.catch((error) => {
				console.log(error);
				res.send(error);
			});
	}

	checkout( req, res ) {
		const cartToken = CartStore.getToken(req, res);

		CartItemStore.getAll(cartToken, ['products.description'])
			.then(result => {
				let items = result.map(item => {
					return {
						id: item.product_id,
						description: item.description,
						amount: item.value.toFixed(2),
						quantity: item.quantity
					};
				});

				let data = {
					checkout: {
						currency: 'BRL',
						reference: 123123,
						notificationURL: GeneralConfig.getBaseUrl() + 'rest/payment/notification',
						shipping: {
							cost: '11.00'
						},
						items: {
							item: items
						}
					}
				};

				PaymentAPI.checkout(data)
					.then((result) => {
						let code = result.checkout.code[0];

						OrderStore.create({
							token: cartToken,
							pagseguro_checkout_id: code,
							status: 'WAITING_PAYMENT'
						}, items).then(result => {

							CartStore.removeItems(cartToken);

							res.send({
								success: true,
								url: PaymentAPI.getConfig().getCheckoutUrl(code)
							});
						}).catch(error => defaultError(res, error));
					})
					.catch(error => defaultError(res, new Error(), error));
			})
			.catch(error => defaultError(res, error));
	}
}

module.exports = Payment;