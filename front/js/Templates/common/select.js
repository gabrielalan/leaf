var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "		<option>Nenhuma opção para selecionar</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "		<option value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.value : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"form-group\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	"
    + ((stack1 = this.lambda(((stack1 = (depth0 != null ? depth0.loading : depth0)) != null ? stack1.compiled : stack1), depth0)) != null ? stack1 : "")
    + "\n	<select class=\"form-control\">\n"
    + ((stack1 = helpers.unless.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.store : depth0)) != null ? stack1.data : stack1)) != null ? stack1.length : stack1),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.store : depth0)) != null ? stack1.data : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</select>\n</div>";
},"useData":true});