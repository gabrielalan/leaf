var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"product\">\n	<div class=\"product-images\">\n		<div class=\"product-image-bigger\">\n			<img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/graos.jpg\" alt=\"\" />\n		</div>\n\n		<ul class=\"product-image-list\">\n			<li><a href=\"#\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" /></a></li>\n			<li><a href=\"#\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" /></a></li>\n			<li><a href=\"#\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" /></a></li>\n		</ul>\n	</div>\n\n	<div class=\"product-info\">\n		<span class=\"product-stock has-stock\">Disponibilidade <span><span class=\"icon icon-checkmark\"></span></span></span>\n		<h3>Bolacha</h3>\n\n		<span class=\"product-price\">R$ 12,00</span>\n\n		<hr />\n\n		<p class=\"product-description\">\n			<strong>Descrição:</strong>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.\n		</p>\n\n		<hr />\n\n		<div class=\"row\">\n			<div class=\"col-lg-3 product-quantity\">\n				<label for=\"quantity-input\">Quantidade</label>\n				<a href=\"#\" class=\"product-quantity-less\">-</a>\n				<input type=\"text\" id=\"quantity-input\" class=\"form-control\" value=\"1\" />\n				<a href=\"#\" class=\"product-quantity-more\">+</a>\n			</div>\n			<div class=\"col-lg-5\">\n				<button class=\"btn btn-warning btn-block product-add-to-cart\">\n					<span><span class=\"icon icon-bag\"></span></span>\n					Adicionar ao carrinho\n				</button>\n			</div>\n			<div class=\"col-lg-4\">\n				<a href=\"#\" class=\"btn btn-link btn-block\">Comprar</a>\n			</div>\n		</div>\n	</div>\n\n	<div class=\"similar-products\" id=\"similar-products\">\n		<h3>Produtos Similares</h3>\n\n		<div class=\"similar-pager\" data-pc-pager=\"similar-products\">\n			<a href=\"#\" class=\"pc-page-left\"><span class=\"icon icon-chevron-thin-left\"></span></a>\n			<a href=\"#\" class=\"pc-page-right\"><span class=\"icon icon-chevron-thin-right\"></span></a>\n		</div>\n\n		<div class=\"similar-container\">\n			<div class=\"pc-walker\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.news : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<div class=\"pc-holder\">\n					<a href=\"/product/2\" class=\"pc-item\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" alt=\"Cookie\"></a>\n					<a href=\"/product/2\" class=\"pc-item\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" alt=\"Cookie\"></a>\n					<a href=\"/product/2\" class=\"pc-item\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" alt=\"Cookie\"></a>\n					<a href=\"/product/2\" class=\"pc-item\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" alt=\"Cookie\"></a>\n					<a href=\"/product/2\" class=\"pc-item\"><img src=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "img/listagem.jpg\" alt=\"Cookie\"></a>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});