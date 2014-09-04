define(['backbone', 'underscore', 'cfg',
        'text!templates/sidebar.html', 'text!templates/adminSidebar.html'],
        function (Backbone, _, cfg,
            SideBarTemplate, AdminSidebarTemplate) {
    'use strict';

    /**
     * @class SideBar
     * @extends Backbone.View
     * @desc Side bar
     */
    var SideBar = Backbone.View.extend({
        initialize: function (args) {
            this.render(args);
        },

        render: function (args) {
            // render correct sidebar depending on args (regular/admin)
            return !(args && args.admin) ? this.$el.html(_.template(SideBarTemplate)(cfg.profile)) : this.$el.html(_.template(AdminSidebarTemplate)(cfg.profile));
        },

        el: '#sidebar'
    });

    return SideBar;
});
