define(['backbone', 'jquery',
        'views/sidebar', 'views/content', 'views/feed', 'views/editor'],
        function (Backbone, $,
            SideBarView, ContentView, FeedView, AdminEditor) {
    'use strict';

    var AppRouter = function () {

        var router = new (Backbone.Router.extend({
            routes: {
                '': 'default',
                'post/:title': 'post',

                'admin': 'admin',
                'admin/create': 'adminCreate',
                'admin/edit/:post': 'adminEdit'
            }
        }))()

        /**
         * Reader routes
         */
        .on('route:default', function () {
            new SideBarView();
            new FeedView();
        })
        .on('route:post', function (title) {
            new SideBarView();
            new ContentView({ title: title });
        })

        /**
         * Admin routes
         */
        .on('route:admin', function () {
            new SideBarView({ admin: true });
        })

        .on('route:adminCreate', function () {
            new SideBarView({ admin: true });
            new AdminEditor();
        })

        .on('route:adminEdit', function () {
            new SideBarView({ admin: true });
            new AdminEditor();
        });

        // start HTML5 pushState
        Backbone.history.start({
            pushState: true,
            root: '/'
        });

        // Prevent HTTP reloads
        $(window.document).on('click', 'a:not([data-bypass])', function (e) {
            var href = $(this).attr('href'),
                protocol = this.protocol + '//';

            if (href.slice(0, protocol.length) !== protocol) {
                e.preventDefault();
                router.navigate(href, true);
            }
        });
    };

    return AppRouter;
});
