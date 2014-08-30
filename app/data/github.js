'use strict';

var Github, self,
    needle = require('needle'),
    host = 'https://api.github.com',
    q = require('q');

/**
 * @class Github
 * @desc Request data from Github
 */
module.exports = Github = function (appl) {
    self = this;
    self.username = appl.cfg.profile.github.username;
    self.token = appl.cfg.github.token;
};

Github.prototype.events = function () {
    var d = q.defer();

    needle.get(host + '/users/' + self.username + '/events/public?access_token=' + self.token, function (err, resp) {
        d[err ? 'reject' : 'resolve'](err ? err : resp.body);
    });

    // types @ https://developer.github.com/v3/activity/events/types/

    return d.promise;
};
