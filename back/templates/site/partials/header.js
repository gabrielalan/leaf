var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"header row\">\n	<div class=\"col-lg-2 col-md-2 col-sm-12\">\n		<h1><a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "\"><img src=\"/img/logo.svg\" alt=\"Leaf\" /></a></h1>\n	</div>\n	<div class=\"col-lg-8 col-md-8 col-sm-6\">\n"
    + ((stack1 = container.invokePartial(partials.search,depth0,{"name":"search","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"col-lg-2 col-md-2 col-sm-6\">\n		<ul class=\"nav nav-pills pull-right top-menu\">\n			<li role=\"presentation\" ><a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "cart\" class=\"cart-button\">\n				Carrinho\n				<span class=\"icon icon-bag\"></span>\n			</a></li>\n		</ul>\n	</div>\n</div>";
},"usePartial":true,"useData":true});