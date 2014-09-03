define(['io', 'q'], function (io, q) {
    'use strict';

    var RequestHandler = function () {
        self = this;
        self.socket = io();
    },
        self;

    RequestHandler.prototype.request = function (event, args) {

        var d = q.defer();
        self.socket.emit(event || '', args || {}, function (resp) {
            d.resolve(resp);
        });

        return d.promise;
    };

    return new RequestHandler();
});
