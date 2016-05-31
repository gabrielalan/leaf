var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<tr>\r\n		<td>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</td>\r\n		<td>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</td>\r\n		<td>"
    + alias4((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,(depth0 != null ? depth0.amount : depth0),{"name":"currency","hash":{},"data":data}))
    + "</td>\r\n	</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p>Olá, uma venda foi atualizada no sistema.</p>\r\n\r\n<p>O comprador, <strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>, fez este pedido:</p>\r\n\r\n<table style=\"width: 80%;\">\r\n	<thead>\r\n	<tr>\r\n		<th align=\"left\">Descrição</th>\r\n		<th align=\"left\">Quantidade</th>\r\n		<th align=\"left\">Valor</th>\r\n	</tr>\r\n	</thead>\r\n	<tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<tr>\r\n		<td colspan=\"2\"><strong>Frete</strong></td>\r\n		<td>"
    + alias4((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,(depth0 != null ? depth0.shipping : depth0),{"name":"currency","hash":{},"data":data}))
    + "</td>\r\n	</tr>\r\n	</tbody>\r\n	<tfoot>\r\n	<tr>\r\n		<td colspan=\"2\"><p>Total à receber (bruto)</p></td>\r\n		<td>\r\n			<span id=\"cartTotalAmount\">"
    + alias4((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"currency","hash":{},"data":data}))
    + "</span>\r\n		</td>\r\n	</tr>\r\n	</tfoot>\r\n</table>\r\n\r\n<p>Entre em <a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "admin\">"
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "admin</a> para ver os detalhes da transação.</p>";
},"useData":true});