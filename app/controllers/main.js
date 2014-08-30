'use strict';

module.exports = function (appl) {

    this.appl = appl;
    this.cfg = appl.cfg;

    this.models = new (require('./api.js'))(appl);
    this.routine = new (require('./routine.js'))(this);
    this.responder = new (require('./request.js'))(this);
};
