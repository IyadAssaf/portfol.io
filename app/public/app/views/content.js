define(['backbone', 'underscore', 'jquery', 'markdown',
        'text!templates/content.html'],
        function (Backbone, _, $, markdown,
            ContentTemplate) {
    'use strict';

    /**
     * @class ContentView
     * @extends Backbone.View
     */
    var ContentView = Backbone.View.extend({
        initialize: function () {
            this.render();

            var sidebarWidth = 250;
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

        render: function () {
            var content = {
                title: 'This is my title',
                subtitle: 'This is some super cool subtitle',
                body: markdown.toHTML('**ghsjdfkghajsdgfh** \n \n adshfkgashf asdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfahasdfghjas gfgasfk agdsjfhas gsghjf gafgasgfsgfah')
            };

            this.$el.html(_.template(ContentTemplate, content));
        },

        el: '#content'
    });

    return ContentView;
});
