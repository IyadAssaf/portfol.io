define(['backbone', 'underscore', 'jquery',
        'text!templates/feed.html'],
        function (Backbone, _, $,
        FeedTemplate) {
    'use strict';

    /**
     * @class FeedView
     * @extends Backbone.View
     * @desc Feed
     */
    var FeedView = Backbone.View.extend({
        initialize: function () {
            this.render();

            $(window).scroll(function () {
                var opactiy = (($(document).scrollTop() / 148) * -1) + 1;
                $('.feedHeader').css('opacity', opactiy);
            });
        },

        render: function () {
            this.$el.html(_.template(FeedTemplate, {
                feed: [{
                    title: 'Some post',
                    desc: 'fhjsghkjdfskgfhjsdg sgfhsdk gfdhsgfag fghsdh fjgkasfghsad gfahsdgf ajsgkdhf gasdhjfg ashjgf adjsgfads gfhagsd fjagsdf ajshdf gahjsdfg kfhjsghkjdfskgfhjsdg sgfhsdk gfdhsgfag fghsdh fjgkasfghsad gfahsdgf ajsgkdhf gasdhjfg ashjgf adjsgfads gfhagsd fjagsdf ajshdf gahjsdfg kfhjsghkjdfskgfhjsdg sgfhsdk gfdhsgfag fghsdh fjgkasfghsad gfahsdgf ajsgkdhf gasdhjfg ashjgf adjsgfads gfhagsd fjagsdf ajshdf gahjsdfg kfhjsghkjdfskgfhjsdg sgfhsdk gfdhsgfag fghsdh fjgkasfghsad gfahsdgf ajsgkdhf gasdhjfg ashjgf adjsgfads gfhagsd fjagsdf ajshdf gahjsdfg k',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }, {
                    title: 'Some post',
                    desc: 'This is one of the posts..',
                    url: 'Some post'
                }]
            }));
        },

        el: '#content'
    });

    return FeedView;
});
