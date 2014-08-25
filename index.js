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

    return delete profile.mongo && profile;
};

/**
 * Load configuration schemes from the ./cfg dir using command line args
 */
console.log(new Application(require('./cfg/' + require('optimist').argv.scheme)));
