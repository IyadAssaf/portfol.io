define(['backbone', 'underscore',
        'text!templates/login.html'],
        function (Backbone, _,
        LoginTemplate) {
    'use strict';

    /**
     * @class LoginView
     * @extends Backbone.View
     * @desc Login
     */
    var LoginView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(_.template(LoginTemplate)({}));
        },

        el: '#content'
    });

    return LoginView;
});
