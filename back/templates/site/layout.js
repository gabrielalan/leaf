var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!DOCTYPE html>\n<html>\n<head>\n	<title>Test</title>\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/lato/lato.css\" />\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/build/css/app.css\" />\n</head>\n<body>\n	<div id=\"wrapper\" class=\"container\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.menu,depth0,{"name":"menu","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.content,depth0,{"name":"content","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n		<div class=\"our-products padding-paragraph\">\n			<h2 class=\"title-diviser\">\n				Novos produtos\n				<div class=\"pc-pager\" data-pc-pager=\"our-products\">\n					<a href=\"#\" class=\"pc-page-left\"><svg class=\"icon icon-leaf\"><use xlink:href=\"/img/iconmoon/symbol-defs.svg#icon-chevron-thin-left\"></use></svg></a>\n					<a href=\"#\" class=\"pc-page-right\"><svg class=\"icon icon-leaf\"><use xlink:href=\"/img/iconmoon/symbol-defs.svg#icon-chevron-thin-right\"></use></svg></a>\n				</div>\n			</h2>\n			\n			<!-- products carousel -->\n"
    + ((stack1 = container.invokePartial(partials.carousel,depth0,{"name":"carousel","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</div>\n\n"
    + ((stack1 = container.invokePartial(partials.who,depth0,{"name":"who","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.othermenus,depth0,{"name":"othermenus","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n		<div class=\"copyright line-bottom-grey line-top-grey\">\n			<p class=\"pull-right\">Desenvolvido por Braw.ani</p>\n			<address>Copyright &copy; 2015 Leaf, All right reserved</address>\n		</div>\n	</div>\n	\n	<script type=\"text/javascript\" src=\"/vendor/system.js/dist/system.js\"></script>\n	<script type=\"text/javascript\" src=\"/vendor/jquery/dist/jquery.min.js\"></script>\n	<script type=\"text/javascript\" src=\"/vendor/bootstrap-sass/assets/javascripts/bootstrap.min.js\"></script>\n	<script type=\"text/javascript\">\n		System.config({\n			baseURL: '/js',\n			defaultJSExtensions: true,\n			format: 'cjs',\n			map: {\n				'Fluxxor': '/vendor/fluxxor/build/fluxxor.min.js',\n				'handlebars': '/vendor/handlebars/handlebars.runtime.min.js'\n			}\n		});\n\n		System.import('main.js');\n	</script>\n</body>\n</html>";
},"usePartial":true,"useData":true});