define(['backbone'], function (Backbone) {
    'use strict';
    
    var Feed = Backbone.Model.extend({

        defaults: {
            body: ''
        },

        initialize: function () {

        }
    });

    return Feed;
});
