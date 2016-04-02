var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h2 class=\"title-diviser\">Obrigado</h2>\n\n<div class=\"success\">\n\n	<div class=\"resume\">\n		<table>\n			<thead>\n				<tr>\n					<th>Descrição</th>\n					<th>Valor</th>\n				</tr>\n			</thead>\n			<tbody>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.transaction : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<tr>\n					<td><strong>Frete</strong></td>\n					<td>"
    + alias3((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.transaction : depth0)) != null ? stack1.shipping : stack1)) != null ? stack1.cost : stack1),{"name":"currency","hash":{},"data":data}))
    + "</td>\n				</tr>\n			</tbody>\n			<tfoot>\n				<tr>\n					<td><p>Total a pagar</p></td>\n					<td>\n						<span id=\"cartTotalAmount\">"
    + alias3((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.transaction : depth0)) != null ? stack1.total : stack1),{"name":"currency","hash":{},"data":data}))
    + "</span>\n					</td>\n				</tr>\n			</tfoot>\n		</table>\n	</div>\n\n	<p>Obrigado, "
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.transaction : depth0)) != null ? stack1.sender : stack1)) != null ? stack1.name : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ". Todo o processo da compra foi finalizado e após a confirmação do pagamento você receberá mais informações.</p>\n\n	<p>Em casos de dúvida você pode nos contactar pelo e-mail: <a href=\"mailto:manadistribuidor@gmail.com\">manadistribuidor@gmail.com</a>.</p>\n	\n	<p>Nós iremos lhe enviar e-mails para cada mudança de status do seu pedido, e iremos lhe contactar por este e-mail: <a href=\"mailto:manadistribuidor@gmail.com\">manadistribuidor@gmail.com</a>.</p>\n\n	<p>Ao lado, você pode confirmar os itens do seu pedido.</p>\n\n	<a href=\""
    + alias3(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary btn-lg\">Voltar ao inicio</a>\n\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<tr>\n					<td>\n						<h4>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h4>\n						<p>Quantidade: "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p>\n					</td>\n					<td>"
    + alias4((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,(depth0 != null ? depth0.amount : depth0),{"name":"currency","hash":{},"data":data}))
    + "</td>\n				</tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda(depth0, depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});