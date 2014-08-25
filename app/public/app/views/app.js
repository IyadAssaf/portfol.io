define(['backbone',
        'views/sidebar', 'views/content'],
        function (Backbone,
            SideBar, ContentView) {
    'use strict';

    /**
     * @class AppView
     * @extends Backbone.View
     * @desc Main application view
     */
    var AppView = Backbone.View.extend({
        initialize: function () {

            // Setup the sidebar and content view
            new SideBar();
            new ContentView();
        }
    });

    return AppView;
});
