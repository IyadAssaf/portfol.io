/**
 * @desc main file for running the application
 */

'use strict';

var Application = function (profile) {

    new (require('./app/app'))(profile)
    .then(function (resp) {

    }).fail(function (error) {
        // error was thrown
        console.error(profile.scheme + ': Error: ' + error);
    })
    .done();

    // clone the cfg and remove sesitive parts for logging
    profile = require('util')._extend({}, profile)
    return delete profile.mongo && delete profile.redis && delete profile.admin && profile;
};

/**
 * Load configuration schemes from the ./cfg dir using command line args
 */
console.log('Portfol.io app running with cfg: ' + JSON.stringify(new Application(require('./cfg/' + require('optimist').argv.scheme)), null, 4));
