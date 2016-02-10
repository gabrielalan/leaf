'use strict';

//Load common used libs
require('jquery');
require('bootstrap');

// Initiate all common widgets and classes
var SiteRouteActions = require('Controllers/Site'),
	RouteManager = require('Routes/Manager');

new RouteManager(SiteRouteActions, true);