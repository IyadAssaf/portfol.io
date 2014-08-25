define(['backbone', 'underscore'],
        function (Backbone) {
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

        },

        el: '#content'
    });
    
    return FeedView;
});
