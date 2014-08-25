define(['backbone', 'underscore', 'cfg',
        'text!templates/sidebar.html'],
        function (Backbone, _, cfg,
            SideBarTemplate) {
    'use strict';

    /**
     * @class SideBar
     * @extends Backbone.View
     * @desc Side bar
     */
    var SideBar = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(_.template(SideBarTemplate, cfg.profile));
        },

        el: '#sidebar',

        // profile: cfg.profile
    });

    return SideBar;
});
