'use strict';

var RequestHandler, self;

module.exports = RequestHandler = function (_appl) {

    this.io = _appl.socket;
    this.app = _appl.app;

    this.io.on('connection', function (socket) {

        // request sorted feed of twitter / gh and post activity
        socket.on('feed', function (query, next) {

        });

        // load particular feed post
        socket.on('post', function (query, next) {

        });

        // create a blog post, AUTH ONLY
        socket.on('createPost', function (query, next) {
            // check if AUTH'd
        });
    });

    self = this;
};
