define([], function () {
    'use strict';

    return {
        profile: {
            github: {
                username: '<%= github.username %>'
            },
            twitter: {
                username: '<%= twitter.username %>'
            },
            bio: '<%= bio %>',
            image: '<%= image %>'
        }
    };
});
