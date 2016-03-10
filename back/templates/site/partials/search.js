var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form class=\"top-search row\" action=\"/search\" id=\"search-form\">\n	<div class=\"top-search-input col-lg-10 col-md-10 col-sm-8 col-xs-10\">\n		<input type=\"text\" name=\"term\" id=\"term\" class=\"form-control\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"term","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Procure seu produto (ex: biscoito de chocolate)\" />\n	</div>\n	<div class=\"top-search-button col-lg-2 col-md-2 col-sm-4 col-xs-2\">\n		<button type=\"submit\" class=\"btn btn-link btn-block\"><span class=\"icon icon-search\"></span></button>\n	</div>\n</form>";
},"useData":true});