var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n<head>\n	<title>Leaf - "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/lato/lato.css\" />\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/build/css/app.css\" />\n</head>\n<body class=\"jelly-back\">\n	<div class=\"container error-jumbo\">\n		<div class=\"jumbotron\">\n			<h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n			<p>"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n			<p><a class=\"btn btn-primary btn-lg\" href=\"/\" role=\"button\">Voltar à página inicial</a></p>\n		</div>\n	</div>\n</body>\n</html>";
},"useData":true});