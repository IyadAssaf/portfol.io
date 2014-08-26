define(['backbone', 'underscore',
        'text!templates/feed.html'],
        function (Backbone, _,
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
        },

        render: function () {
            this.$el.html(_.template(FeedTemplate, {}));
        },

        el: '#content'
    });

    return FeedView;
});
