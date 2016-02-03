var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"header row\">\n	<div class=\"col-lg-2 col-md-2 col-sm-12\">\n		<h1><a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "\"><img src=\"/img/logo.svg\" alt=\"Leaf\" /></a></h1>\n	</div>\n	<div class=\"col-lg-8 col-md-8 col-sm-6\">\n		<form class=\"top-search row\" action=\"/search\" id=\"search-form\">\n			<div class=\"top-search-input col-lg-10 col-md-10 col-sm-8 col-xs-10\">\n				<input type=\"text\" name=\"term\" id=\"term\" class=\"form-control\" placeholder=\"Procure seu produto (ex: biscoito de chocolate)\" />\n			</div>\n			<div class=\"top-search-button col-lg-2 col-md-2 col-sm-4 col-xs-2\">\n				<button type=\"submit\" class=\"btn btn-link btn-block\"><svg class=\"icon\"><use xlink:href=\"/img/iconmoon/symbol-defs.svg#icon-search\"></use></svg></button>\n			</div>\n		</form>\n	</div>\n	<div class=\"col-lg-2 col-md-2 col-sm-6\">\n		<ul class=\"nav nav-pills pull-right top-menu\">\n			<li role=\"presentation\" ><a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "cart\" class=\"cart-button\">\n				Carrinho\n				<svg class=\"icon icon-leaf\"><use xlink:href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "/img/iconmoon/symbol-defs.svg#icon-bag\"></use></svg>\n			</a></li>\n		</ul>\n	</div>\n</div>";
},"useData":true});