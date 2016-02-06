System.config({
	baseURL: '/js',
	defaultJSExtensions: true,
	format: 'cjs',
	map: {
		'react': '/vendor/react/react.js',
		'ReactDOM': '/vendor/react/react-dom.js',
		'Fluxxor': '/vendor/fluxxor/build/fluxxor.min.js',
		'RLite': '/vendor/rlite/rlite.min.js',
		'handlebars': '/vendor/handlebars/handlebars.runtime.min.js',
		'jquery': '/vendor/jquery/dist/jquery.min.js',
		'bootstrap': '/vendor/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		'underscore': '/vendor/underscore/underscore-min.js',
		'Backbone': '/vendor/backbone/backbone-min.js'
	}
});

System.import('main.js');