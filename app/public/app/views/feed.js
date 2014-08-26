define(['backbone', 'underscore', 'jquery',
        'text!templates/feed.html'],
        function (Backbone, _, $,
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
            this.$el.html(_.template(FeedTemplate, {
                feed: ['hsjdf', 'sdfgsfdg', 'sdfgsdfgf', 'sdfgsdfgsdg', 'sfgsdfg', 'ghfgsahdkj','hsjdf', 'sdfgsfdg', 'sdfgsdfgf', 'sdfgsdfgsdg', 'sfgsdfg', 'ghfgsahdkj', 'hsjdf', 'sdfgsfdg', 'sdfgsdfgf', 'sdfgsdfgsdg', 'sfgsdfg', 'ghfgsahdkj','hsjdf', 'sdfgsfdg', 'sdfgsdfgf', 'sdfgsdfgsdg', 'sfgsdfg', 'ghfgsahdkj']
            }));
        },

        el: '#content'
    });

    return FeedView;
});
