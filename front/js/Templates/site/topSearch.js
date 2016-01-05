var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<form class=\"top-search row\" action=\"#\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"top-search-input col-lg-10\">\n		<input type=\"text\" name=\"search\" id=\"search\" class=\"form-control\" placeholder=\"Procure seu produto (ex: biscoito de chocolate)\" />\n	</div>\n	<div class=\"top-search-button col-lg-2\">\n		<button type=\"submit\" class=\"btn btn-link btn-block\"><svg class=\"icon\"><use xlink:href=\"img/iconmoon/symbol-defs.svg#icon-search\"></use></svg></button>\n	</div>\n</form>";
},"useData":true});