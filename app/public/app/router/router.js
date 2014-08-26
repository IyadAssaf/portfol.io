define(['backbone', 'jquery',
        'views/sidebar', 'views/content', 'views/feed', 'views/editor', 'views/login'],
        function (Backbone, $,
            SideBarView, ContentView, FeedView, AdminEditorView, LoginView) {
    'use strict';

    var AppRouter = function () {

        var router = new (Backbone.Router.extend({
            routes: {
                /**
                 * Reader routes
                 */
                '': function () {
                    new SideBarView();
                    new FeedView();
                },
                'post/:title': function (title) {
                    new SideBarView();
                    new ContentView({ title: title });
                },
                /**
                 * Admin routes
                 */
                'login': function () {
                    new LoginView();
                },
                'admin': function () {
                    new SideBarView({ admin: true });
                },
                'admin/post': function () {
                    new SideBarView({ admin: true });
                    new AdminEditorView();
                },
                'admin/post/:postId': function () {
                    new SideBarView({ admin: true });
                    new AdminEditorView();
                }
            }
        }))();

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
