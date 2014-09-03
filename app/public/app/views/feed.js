define(['backbone', 'underscore', 'jquery',
        'modules/request',
        'text!templates/feed.html'],
        function (Backbone, _, $,
            Request,
            FeedTemplate) {
    'use strict';

    /**
     * @class FeedView
     * @extends Backbone.View
     * @desc Feed
     */
    var FeedView = Backbone.View.extend({
        initialize: function () {
            this.render();

            $(window).scroll(function () {
                var opactiy = (($(document).scrollTop() / 148) * -1) + 1;
                $('.feedHeader').css('opacity', opactiy);
            });
        },

        render: function () {

            self = this;

            var feedContent = [];
            Request.request('feed').then(function (feed) {
                feedContent = feed;
            }, function () {
                feedContent = [];
            }).then(function () {                
                self.$el.html(_.template(FeedTemplate, { feed: feedContent }));
            });
        },

        el: '#content'
    }),
        self;

    return FeedView;
});
