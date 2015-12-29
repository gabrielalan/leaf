'use strict';

var constants = {
    ADD_ENTRY: "ADD_ENTRY"
};

var actions = {
    addEntry: function( data ) {
        this.dispatch(constants.ADD_ENTRY, data);
    }
};

module.exports = {
    constants: constants,
    actions: actions
};