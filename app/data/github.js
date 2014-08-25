'use strict';

var Github, self,
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

    needle.get('https://api.github.com/users/' + self.username + '/events', function (err, resp) {
        console.log(resp.body);
        d[err ? 'reject' : 'resolve'](err ? err : resp.body);
    });

    return d.promise;
};
