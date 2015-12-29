'use strict';

var Fluxxor = require("Fluxxor"),
    Actions = require("Actions/HighlightActions");

var HighlightStore = Fluxxor.createStore({
    
    initialize: function() {
        this.bindActions(
            Actions.constants.ADD_ENTRY, this.addEntry    
        );
    },
    
    addEntry: function() {
        this.emit("change");
    }
});

module.exports = HighlightStore;