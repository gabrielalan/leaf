var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p>Você recebeu uma nova mensagem do formulário de contato.</p>\r\n\r\n<p>Hello, <strong>"
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</strong>, Please <a href=\""
    + alias4(((helper = (helper = helpers.reset || (depth0 != null ? depth0.reset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reset","hash":{},"data":data}) : helper)))
    + "\">go here to reset your password</a>: "
    + alias4(((helper = (helper = helpers.reset || (depth0 != null ? depth0.reset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reset","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});