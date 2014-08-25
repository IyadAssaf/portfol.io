'use strict';

var RequestHandler, self;

module.exports = RequestHandler = function (_appl) {

    this.io = _appl.socket;
    this.app = _appl.app;

    this.io.on('connection', function (socket) {
        socket.on('test', function (data, next) {

        });
    });
    
    self = this;
};
