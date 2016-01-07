var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"highlight\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.highlight : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"hg-right-holder\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.highlight : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.BIGGER : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "	<a href=\"#\" class=\"hg-left\" style=\"background-image:url('"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.PRODUCT_BIGGER : stack1), depth0))
    + "');\">\n		<span class=\"hg-title\">\n			<strong>"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>\n			<span>"
    + alias1(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\n		</span>\n	</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.BIGGER : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.BIG : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "			<span class=\"hg-title\">\n				<strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>\n				<span>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\n			</span>\n		</a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<a href=\"#\" class=\"hg-right-top\" style=\"background-image:url('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.PRODUCT_BIGGER : stack1), depth0))
    + "');\">\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<a href=\"#\" class=\"hg-right-bottom\" style=\"background-image:url('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.PRODUCT_BIGGER : stack1), depth0))
    + "');\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});