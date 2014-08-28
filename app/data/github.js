'use strict';

var Github, self,
    octonode = require('octonode'),
    q = require('q');

/**
 * @class Github
 * @desc Request data from Github
 */
module.exports = Github = function (appl) {

    this.username = appl.cfg.profile.github.username;
    self = this;
};

Github.prototype.events = function () {
    var d = q.defer();

    var octo = octonode.client(),
        user = octo.user('IyadAssaf');

    user.events(['PushEvent'], function (err, resp) {
        d[err ? 'reject' : 'resolve'](err ? err : resp);
    });

    // types:
    // PushEvent - Pushed code
    // PublicEvent - Created repo
    // WatchEvent - Started watching
    // more @ https://developer.github.com/v3/activity/events/types/

    return d.promise;
};
