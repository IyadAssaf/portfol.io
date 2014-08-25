define(['backbone'], function (Backbone) {
    'use strict';

    var AppRouter = function () {

        var router = new (Backbone.Router.extend({
            routes: {
                '*actions': 'defaultRoute'
            }
        }))();

        router.on('route:defaultRoute', function () {

        });

        Backbone.history.start();
    };

    return AppRouter;
});
