'use strict';

var Fluxxor = require('Fluxxor'),
    HighlightActions = require("Actions/HighlightActions"),
    HighlightStore = require("Stores/HighlightStore");

module.exports = new Fluxxor.Flux({
	'HighlightStore': HighlightStore
}, HighlightActions.actions);