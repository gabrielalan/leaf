var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"header row\">\n	<div class=\"col-lg-2\">\n		<h1><a href=\"#\"><img src=\"img/logo.svg\" alt=\"Leaf\" /></a></h1>\n	</div>\n	<div class=\"col-lg-5\">\n		<form class=\"top-search row\" action=\"#\">\n  			<div class=\"top-search-input col-lg-10\">\n				<input type=\"text\" name=\"search\" id=\"search\" class=\"form-control\" placeholder=\"Procure seu produto (ex: biscoito de chocolate)\" />\n			</div>\n			<div class=\"top-search-button col-lg-2\">\n				<button type=\"submit\" class=\"btn btn-link btn-block\"><svg class=\"icon\"><use xlink:href=\"img/iconmoon/symbol-defs.svg#icon-search\"></use></svg></button>\n			</div>\n		</form>\n	</div>\n	<div class=\"col-lg-5\">\n		<ul class=\"nav nav-pills\">\n			<li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n			<li role=\"presentation\"><a href=\"#\">Profile</a></li>\n			<li role=\"presentation\"><a href=\"#\">Messages</a></li>\n		</ul>\n	</div>\n</div>\n\n<nav class=\"navbar navbar-default categories\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n        	<a href=\"#\">\n        		<svg class=\"icon icon-leaf\"><use xlink:href=\"img/iconmoon/symbol-defs.svg#icon-leaf\"></use></svg> \n        		<span class=\"nav-text\">Link</span>\n        	</a>\n        </li>\n        <li><a href=\"#\"><svg class=\"icon icon-leaf\"><use xlink:href=\"img/iconmoon/symbol-defs.svg#icon-leaf\"></use></svg> <span class=\"nav-text\">Link</span></a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><svg class=\"icon icon-leaf\"><use xlink:href=\"img/iconmoon/symbol-defs.svg#icon-leaf\"></use></svg> <span class=\"nav-text\">Dropdown</span> <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>";
},"useData":true});