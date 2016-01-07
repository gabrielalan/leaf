var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"highlight\">\n	<a href=\"#\" class=\"hg-left\" style=\"background-image:url('img/graos.jpg');\">\n		<span class=\"hg-title\">\n			<strong>Grãos</strong>\n			<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</span>\n		</span>\n	</a>\n	<div class=\"hg-right-holder\">\n		<a href=\"#\" class=\"hg-right-top\" style=\"background-image:url('img/graos.jpg');\">\n			<span class=\"hg-title\">\n				<strong>Torradas</strong>\n				<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</span>\n			</span>\n		</a>\n		<a href=\"#\" class=\"hg-right-bottom\" style=\"background-image:url('img/graos.jpg');\">\n			<span class=\"hg-title\">\n				<strong>Promoções</strong>\n				<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</span>\n			</span>\n		</a>\n	</div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.layout,depth0,{"name":"layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});