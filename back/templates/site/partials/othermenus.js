var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"other-menus row\">\n	<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n		<h2>Compre conosco</h2>\n		<ul class=\"menu-list\">\n			<li><a href=\"#\">Por que comprar conosco?</a></li>\n			<li><a href=\"#\">Forma de entrega</a></li>\n		</ul>\n	</div>\n	<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n		<h2>Informações</h2>\n		<ul class=\"menu-list\">\n			<li><a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "howtobuy\">Como comprar</a></li>\n		</ul>\n	</div>\n	<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n		<h2>Junte-se à nós</h2>\n		<ul class=\"menu-list\">\n			<li><a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "whytobeleaf\">Por que ser um representante?</a></li>\n			<li><a href=\""
    + alias4(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "howtobeleaf\">Como ser um representante</a></li>\n		</ul>\n	</div>\n	<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n		<h2>Conecte-se</h2>\n		<ul class=\"social\">\n			<li class=\"facebook\"><a href=\"#\"><span class=\"icon icon-facebook\"></span></a></li>\n		</ul>\n	</div>\n</div>";
},"useData":true});