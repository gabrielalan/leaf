var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-list\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.category : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\n	<nav>\n		<ul class=\"pager\">\n		</ul>\n	</nav>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<h2 class=\"title-diviser\">Categoria: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.products : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"product-box\">\n		<a class=\"product-box-image\" href=\"/product/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image: url("
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + ");\"></a>\n		<h3><a href=\"/product/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h3>\n		<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n		<a href=\"/product/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"product-box-buy\"><span><span class=\"icon icon-chevron-thin-left\"></span></span> Comprar</a>\n		<span class=\"product-box-price\">"
    + alias4((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"currency","hash":{},"data":data}))
    + "</span>\n	</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n	<div class=\"product-empty\">\n		<p>Nenhum produto encontrado, talvez em outra categoria?</p>\n\n		<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary btn-lg\">Voltar à página inicial</a>\n	</div>\n\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<h2 class=\"title-diviser\">Categoria não encontrada</h2>\n\n	<div class=\"product-empty\">\n		<p>A categoria que você solicitou não existe</p>\n\n		<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary btn-lg\">Voltar à página inicial</a>\n	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});