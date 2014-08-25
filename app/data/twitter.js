'use strict';

var Twitter, self,
    twitter = require('twitter'),
    q = require('q');

/**
 * @class Twitter
 * @desc Request data from Twitter
 */
module.exports = Twitter = function (appl) {
    
    this.username = appl.cfg.profile.twitter.username;
    self = this;
};

Twitter.prototype.events = function () {
    var d = q.defer();

    // https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

    return d.promise;
};
