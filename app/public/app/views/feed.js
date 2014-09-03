define(['backbone', 'underscore', 'jquery', 'moment',
        'modules/request',
        'text!templates/feed.html'],
        function (Backbone, _, $, moment,
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

                for(var i in feed) {
                    feed[i].prettyDate = feed[i].date ? moment(feed[i].date).format('MMM Do YY') : undefined;
                }

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
