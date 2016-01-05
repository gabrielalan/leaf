var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "class=\"active\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, buffer = 
  "<li role=\"presentation\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = ((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias1),(options={"name":"active","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.active) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "><a href=\"#\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"useData":true});