define(['backbone', 'underscore', 'MediumEditor', 'text!templates/adminContent.html'],
        function (Backbone, _, MediumEditor, AdminContentTemplate) {
    'use strict';

    /**
     * @class ContentEdit
     * @extends Backbone.View
     */
    var ContentEdit = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(_.template(AdminContentTemplate)({}));
            this.editor = new MediumEditor('.editable', {
                anchorInputPlaceholder: 'Type a link',
                buttons: ['bold', 'italic', 'quote'],
                diffLeft: 25,
                diffTop: 10,
                firstHeader: 'h1',
                secondHeader: 'h2',
                delay: 1000,
                targetBlank: true
            });
        },

        el: '#content'
    });

    return ContentEdit;
});
