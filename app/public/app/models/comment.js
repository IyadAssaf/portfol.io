define(['backbone'], function (Backbone) {
    'use strict';
    
    var Comment = Backbone.Model.extend({

        defaults: {
            body: ''
        },

        initialize: function () {

        }
    });

    return Comment;
});
