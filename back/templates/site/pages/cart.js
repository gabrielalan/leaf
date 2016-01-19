var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"cart\">\n	<h2 class=\"title-diviser\">\n		Meu carrinho\n		<button class=\"btn btn-success btn-lg cart-finish\">Finalizar compra</button>\n	</h2>\n\n	<p>Confira os produtos que você escolheu, e se desejar, continue navegando por nosso site.</p>\n\n	<div class=\"table-holder\">\n		<div class=\"header row\">\n			<div class=\"col-lg-6\">Produto</div>\n			<div class=\"col-lg-2 column-center\">Quantidade</div>\n			<div class=\"col-lg-2 cart-price\">Valor Unitário</div>\n			<div class=\"col-lg-2 cart-price\">Valor Total</div>\n		</div>\n\n		<div class=\"product row\">\n			<div class=\"col-lg-1\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/dropdown.jpg\" class=\"cart-prod-image\" /></div>\n			<div class=\"col-lg-5\">Moto G (2ª Geração) com 4G Dual Chip XT 1078, Desbloqueado Preto</div>\n			<div class=\"col-lg-2 product-quantity\">\n				<a href=\"#\" class=\"product-quantity-less\">-</a>\n				<input type=\"text\" id=\"quantity-input\" class=\"form-control\" value=\"1\" />\n				<a href=\"#\" class=\"product-quantity-more\">+</a>\n			</div>\n			<div class=\"col-lg-2 cart-price\">R$ 10,00</div>\n			<div class=\"col-lg-2 cart-price\">R$ 10,00</div>\n		</div>\n		<div class=\"product row\">\n			<div class=\"col-lg-1\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/dropdown.jpg\" class=\"cart-prod-image\" /></div>\n			<div class=\"col-lg-5\">Moto G (2ª Geração) com 4G Dual Chip XT 1078, Desbloqueado Preto</div>\n			<div class=\"col-lg-2 product-quantity\">\n				<a href=\"#\" class=\"product-quantity-less\">-</a>\n				<input type=\"text\" id=\"quantity-input\" class=\"form-control\" value=\"1\" />\n				<a href=\"#\" class=\"product-quantity-more\">+</a>\n			</div>\n			<div class=\"col-lg-2 cart-price\">R$ 10,00</div>\n			<div class=\"col-lg-2 cart-price\">R$ 10,00</div>\n		</div>\n		<div class=\"product row\">\n			<div class=\"col-lg-1\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/dropdown.jpg\" class=\"cart-prod-image\" /></div>\n			<div class=\"col-lg-5\">Moto G (2ª Geração) com 4G Dual Chip XT 1078, Desbloqueado Preto</div>\n			<div class=\"col-lg-2 product-quantity\">\n				<a href=\"#\" class=\"product-quantity-less\">-</a>\n				<input type=\"text\" id=\"quantity-input\" class=\"form-control\" value=\"1\" />\n				<a href=\"#\" class=\"product-quantity-more\">+</a>\n			</div>\n			<div class=\"col-lg-2 cart-price\">R$ 10,00</div>\n			<div class=\"col-lg-2 cart-price\">R$ 10,00</div>\n		</div>\n\n		<div class=\"cart-subtotal column-right\">\n			<span>Subtotal: <strong>R$ 10,00</strong></span>\n		</div>\n\n		<div class=\"cart-tax column-right\">\n			<span>Frete: <strong>R$ 10,00</strong></span>\n		</div>\n\n		<div class=\"row cart-total\">\n			<div class=\"col-lg-6\"><strong>Atenção:</strong> O prazo de entrega começa a contar a partir da aprovação do pagamento.</div>\n			<div class=\"col-lg-6 column-right\"><span>Total: <strong>R$ 20,00</strong></span></div>\n		</div>\n\n		<div class=\"column-right\">\n			<button class=\"btn btn-success btn-lg cart-finish\">Finalizar compra</button>\n		</div>\n	</div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});