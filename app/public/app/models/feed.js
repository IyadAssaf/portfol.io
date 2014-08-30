define(['backbone', 'modules/request'], function (Backbone, Request) {
    'use strict';

    var Feed = Backbone.Model.extend({

        defaults: {
            feed: []
        },

        initialize: function () {
            self = this;

            Request.request('feed').then(function (feed) {
                self.defaults.feed = feed;
            }, function () {
                self.defaults.feed = [];
            });
        }
    }),
        self;

    return Feed;
});
