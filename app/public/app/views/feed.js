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

            /*!
             * This should be happening on the feed frontend:
             * for(var i in feed) {
             *     var json = feed[i];
             *
             *     for(var key in json) {
             *         var prettyDate = moment(key).format('MMM Do YY'),
             *             datedArr = json[key];
             *
             *         for(var item in datedArr) {
             *             item = datedArr[item];
             *             //- This is an actual feed item
             *             console.log(JSON.stringify(item));
             *         }
             *     }
             * }
             */
            var feedContent = [];
            Request.request('feed').then(function (feed) {
                feedContent = feed;
            }, function () {
                feedContent = [];
            }).then(function () {

                self.$el.html(_.template(FeedTemplate)({ feed: feedContent }));

                $(function () {

                    // Toggle date boxes and icon
                    $('.date').click(function () {
                        var $dayBox = $(this).parent().find('.dayBox'),
                            $dayIcon = $(this).parent().find('.dayIcon');

                        if($dayBox.is(':visible')) {
                            $dayBox.hide();
                            $dayIcon.addClass('octicon-chevron-right');
                            $dayIcon.removeClass('octicon-chevron-down');
                        } else {
                            $dayBox.show();
                            $dayIcon.removeClass('octicon-chevron-right');
                            $dayIcon.addClass('octicon-chevron-down');
                        }
                    });

                    // feed icon hover
                    $('.feedTitle').each(function () {

                        var self = this, initialColor;

                        $(self).find('a').mouseover(function () {
                            var $ghIcon = $(self).find('.gh_action');
                            initialColor = $ghIcon.css('color');
                            $ghIcon.css('color', 'rgb(75, 70, 70)');

                            var $twIcon = $(self).find('.tw_action');
                            $twIcon.css('opacity', 0.8);

                        }).mouseout(function () {
                            var $icon = $(self).find('.gh_action');
                            $icon.css('color', initialColor);

                            var $twIcon = $(self).find('.tw_action');
                            $twIcon.css('opacity', 0.4);
                        });
                    });

                });

            });



        },

        el: '#content'
    }),
        self;

    return FeedView;
});
