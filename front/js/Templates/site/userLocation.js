var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"modal fade userLocation\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<h4 class=\"modal-title\">Escolha sua região</h4>\n			</div>\n			<div class=\"modal-body\">\n				"
    + ((stack1 = this.lambda(((stack1 = (depth0 != null ? depth0.select : depth0)) != null ? stack1.compiled : stack1), depth0)) != null ? stack1 : "")
    + "\n			</div>\n			<div class=\"modal-footer\">\n				<button type=\"button\" class=\"btn btn-primary save-location\">Salvar</button>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});