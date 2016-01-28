var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<span class=\"counter zero-items\" id=\""
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.store : depth0)) != null ? stack1.total : stack1), depth0))
    + "</span>";
},"useData":true});