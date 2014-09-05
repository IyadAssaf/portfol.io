'use strict';

var RequestHandler, self;

module.exports = RequestHandler = function (main) {

    self = this;

    self.appl = main.appl;
    self.models = main.models;

    self.io = self.appl.socket;
    self.app = self.appl.app;
    
    self.io.on('connection', function (socket) {
        /* jshint unused: false */

        // request sorted feed of twitter / gh and post activity
        socket.on('feed', function (query, next) {
            self.models.feed.query({ sort: { date: -1 }, group: 'byDay' }).then(function (feeds) {
                next(feeds);
            });
        });

        // load particular feed post
        socket.on('post', function (query, next) {

        });

        // create a blog post, AUTH ONLY
        socket.on('createPost', function (query, next) {
            // check if AUTH'd
        });
    });
};
