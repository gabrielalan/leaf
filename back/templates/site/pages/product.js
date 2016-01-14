var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"product\">\n	<div class=\"product-images\">\n		<div class=\"product-image-bigger\">\n			<img src=\"/img/graos.jpg\" alt=\"\" />\n		</div>\n\n		<ul class=\"product-image-list\">\n			<li><a href=\"#\"><img src=\"/img/listagem.jpg\" /></a></li>\n			<li><a href=\"#\"><img src=\"/img/listagem.jpg\" /></a></li>\n			<li><a href=\"#\"><img src=\"/img/listagem.jpg\" /></a></li>\n		</ul>\n	</div>\n\n	<div class=\"product-info\">\n		<span class=\"product-stock\">Disponibilidade <span><svg class=\"icon\"><use xlink:href=\"/img/iconmoon/symbol-defs.svg#icon-chevron-thin-left\"></use></svg></span></span>\n		<h3>Bolacha</h3>\n\n		<span class=\"product-price\">R$ 12,00</span>\n\n		<hr />\n\n		<p class=\"product-description\">\n			<strong>Descrição:</strong>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.\n		</p>\n\n		<hr />\n\n		<div class=\"row\">\n			<div class=\"col-lg-4 product-quantity\">\n				<label for=\"quantity-input\">Quantidade</label>\n				<a href=\"#\" class=\"product-quantity-less\">-</a>\n				<input type=\"text\" id=\"quantity-input\" value=\"1\" />\n				<a href=\"#\" class=\"product-quantity-more\">-</a>\n			</div>\n			<div class=\"col-lg-4\">\n				<button class=\"btn btn-warning\">\n					Adicionar ao carrinho\n					<span><svg class=\"icon\"><use xlink:href=\"/img/iconmoon/symbol-defs.svg#icon-chevron-thin-left\"></use></svg></span>\n				</button>\n			</div>\n			<div class=\"col-lg-4\">\n				<a href=\"#\" class=\"btn btn-link\">Comprar</a>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});