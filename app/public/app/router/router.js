define(['backbone', 'views/sidebar'], function (Backbone, SideBarView) {
    'use strict';

    var AppRouter = function () {

        var router = new (Backbone.Router.extend({
            routes: {
                'admin': 'admin',
                '': 'default'
            }
        }))();

        router
        .on('route:admin', function () {
            new SideBarView({ admin: true });
        })
        .on('route:default', function () {
            new SideBarView();
        });

        // start HTML5 pushState
        Backbone.history.start({
            pushState: true,
            root: '/'
        });
    };

    return AppRouter;
});
