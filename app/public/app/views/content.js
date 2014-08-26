define(['backbone', 'underscore', 'jquery',
        'text!templates/content.html'],
        function (Backbone, _, $, ContentTemplate) {
    'use strict';

    /**
     * @class ContentView
     * @extends Backbone.View
     */
    var ContentView = Backbone.View.extend({
        initialize: function (content) {
            this.render(content);
            
            var sidebarWidth = 250;
            $(window).scroll(function () {
                var position = $(document).scrollLeft();
                if(position > 0) {
                    $('#sidebar').css('width', (position * -1) + sidebarWidth);
                } else {
                    $('#sidebar').css('width', sidebarWidth);
                }
            });

            $(window).resize(function () {
                if(!window.matchMedia('(max-width: 767px)').matches) {
                    var position = $(document).scrollLeft();
                    if(position > 0) {
                        $('#sidebar').css('width', (position * -1) + sidebarWidth);
                    } else {
                        $('#sidebar').css('width', sidebarWidth);
                    }
                } else {
                    $('#sidebar').css('width', 0);
                }
            });
        },

        render: function (content) {
            this.$el.html(_.template(ContentTemplate, content || {}));
        },

        el: '#content'
    });

    return ContentView;
});
