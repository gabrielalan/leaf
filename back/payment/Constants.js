'use strict';

module.exports = {
	currency: 'BRL',

	shipping: {
		cost: '11.00'
	},

	status: {
		waiting_payment: 1,
		under_review: 2,
		paid: 3,
		available: 4,
		contest: 5,
		returned: 6,
		canceled: 7,
		debited: 8,
		litigation: 9,
		sended: 10,
		finished: 11
	},

	statusText: ['Sem situação', 'Aguardando pagamento', 'Em análise', 'Pago', 'Disponível', 'Em disputa', 'Devolvido', 'Cancelado', 'Debitado', 'Retenção temporária', 'Produto enviado', 'Finalizado']
};