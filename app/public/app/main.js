/**
 * @title RequireJS definition and configuration
 * @author Iyad Assaf <iyadassaflondon@gmail.com>
 * @module RequireJS
 * @desc Defines and configures RequireJS. Sets up routes for javascript files to be required into modules around the app.
 */

(function () {
    'use strict';

    // RequireJS config and shim for libs
    require.config({
        paths: {
            jquery: '../assets/bower_components/jquery/dist/jquery.min',
            underscore: '../assets/bower_components/underscore/underscore',
            backbone: '../assets/bower_components/backbone/backbone',
            text: '../assets/bower_components/requirejs-text/text',
            io: '../socket.io/socket.io'
        },
    	shim: {
    		underscore: {
    			exports: '_'
    		},
    		backbone: {
    			deps: [
    				'underscore',
    				'jquery'
    			],
    			exports: 'Backbone'
    		},
            bson: {
                'exports': 'bson'
            }
        },
        deps: ['backbone'],
        priority: []
    });

    // require the router
    require(['router/router'], function (AppRouter) {
        return new AppRouter();
    });
    // require(['views/app', 'router/router'], function (AppView, AppRouter) {
    //     return new AppView() && new AppRouter();
    // });
})();
