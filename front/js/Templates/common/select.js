var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"form-group\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	"
    + ((stack1 = this.lambda(((stack1 = (depth0 != null ? depth0.loading : depth0)) != null ? stack1.compiled : stack1), depth0)) != null ? stack1 : "")
    + "\n	<select class=\"form-control\">\n		<option value=\"sc\">Santa Catarina</option>\n		<option value=\"sp\">São Paulo</option>\n	</select>\n</div>";
},"useData":true});