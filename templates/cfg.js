/**
 * @desc cfg.js is templated from the ./cfg folder properties
 *       and written to ./app/public/app/cfg.js to make the
 *       client side config match the server side.
 */

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
