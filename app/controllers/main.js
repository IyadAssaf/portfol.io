'use strict';

module.exports = function (appl) {

    this.cfg = appl.cfg;

    this.request = new (require('./request.js'))(appl);
    this.models = new (require('./data.js'))(appl);
    this.routine = new (require('./routine.js'))(this);
};
