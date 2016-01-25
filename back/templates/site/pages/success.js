var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2 class=\"title-diviser\">Obrigado</h2>\n\n<div class=\"success\">\n\n	<div class=\"resume\">\n		<table>\n			<thead>\n				<tr>\n					<th>Descrição</th>\n					<th>Valor</th>\n				</tr>\n			</thead>\n			<tbody>\n				<tr>\n					<td>\n						<h4>Asdasdasd</h4>\n						<p>Quantidade: 1</p>\n						<strong>Valor do item: R$ 100,50</strong>\n					</td>\n					<td>R$<strong>100,50</strong></td>\n				</tr>\n				<tr>\n					<td>\n						<h4>Asdasdasd</h4>\n						<p>Quantidade: 1</p>\n						<strong>Valor do item: R$ 100,50</strong>\n					</td>\n					<td>R$<strong>100,50</strong></td>\n				</tr>\n			</tbody>\n			<tfoot>\n				<tr>\n					<td><p>Total a pagar</p></td>\n					<td>\n						<span id=\"cartTotalAmount\">R$<strong>201,00</strong></span>\n					</td>\n				</tr>\n			</tfoot>\n		</table>\n	</div>\n\n	<p>Obrigado, Verme Insolente. Todo o processo da compra foi finalizado e após a confirmação do pagamento você receberá mais informações.</p>\n\n	<p>Em casos de dúvida você pode nos contactar pelo e-mail: <a href=\"mailto:manadistribuidor@gmail.com\">manadistribuidor@gmail.com</a>.</p>\n\n	<p>Nós iremos lhe enviar e-mails para cada mudança de status do seu pedido, e iremos lhe contactar por este e-mail: <a href=\"mailto:manadistribuidor@gmail.com\">manadistribuidor@gmail.com</a>.</p>\n\n	<p>Ao lado, você pode confirmar os itens do seu pedido.</p>\n\n	<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary btn-lg\">Voltar ao inicio</a>\n\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});