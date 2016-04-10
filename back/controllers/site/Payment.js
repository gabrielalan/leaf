'use strict';

var knex = require('../../db/Knex'),
	Controller = require('../Controller'),
	Constants = require('../../payment/Constants'),
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
				let transaction = PaymentAPI.getTransactionObject(result.transaction);

				OrderStore.updateFromAPI(transaction);

				res.send(result);
			})
			.catch((error) => {
				console.log(error);
				res.send(error);
			});
	}

	checkout( req, res ) {
		const cartToken = CartStore.getToken(req, res);

		CartItemStore.getAll(cartToken, ['products.description']).then(result => {
			let items = result.map(item => {
				return {
					id: item.product_id,
					description: item.name,
					amount: item.value.toFixed(2),
					quantity: item.quantity
				};
			});

			knex.transaction(trx => {

				OrderStore.create({
					token: cartToken,
					pagseguro_checkout_id: 0,
					status: Constants.status.waiting_payment,
					date_created: knex.raw('now()'),
					date_updated: knex.raw('now()')
				}, items, trx).then(result => {

					let data = {
						checkout: {
							currency: Constants.currency,
							reference: result.id,
							notificationURL: GeneralConfig.getBaseUrl() + 'rest/payment/notification',
							shipping: Constants.shipping,
							items: {
								item: items
							}
						}
					};

					PaymentAPI.checkout(data)
						.then((result) => {
							let code = result.checkout.code[0];

							CartStore.removeItems(cartToken, trx).then(result => {
								trx.commit(code);

								res.send({
									success: true,
									url: PaymentAPI.getConfig().getCheckoutUrl(code)
								});
							}).catch(trx.rollback);
						})
						.catch(trx.rollback);
				}).catch(trx.rollback);
			})
			.then(result => {
				//console.log(result);
			})
			.catch(error => defaultError(res, error));
		})
		.catch(error => defaultError(res, error));
	}
}

module.exports = Payment;