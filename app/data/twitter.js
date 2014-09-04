'use strict';

var Twitter, self,
    TwitterApi = require('twitter'),
    q = require('q');

/**
 * @class Twitter
 * @desc Request data from Twitter
 */
module.exports = Twitter = function (appl) {
    /* jshint camelcase: false */

    self = this;

    self.username = appl.cfg.profile.twitter.username;

    self.twit = appl.cfg.twitter ? new TwitterApi({
        consumer_key: appl.cfg.twitter.key,
        consumer_secret: appl.cfg.twitter.secret,
        access_token_key: appl.cfg.twitter.tokenKey,
        access_token_secret: appl.cfg.twitter.tokenSecret
    })  : null;
};

/**
 * @param options {Object} {
 *                              since_id: {String} Get activity since event ID
 *                         }
 */
Twitter.prototype.events = function (options) {
    var d = q.defer();

    // return d.promise, in a fancy way. It's not that cryptic if you read it, honest.
    return (self.twit ? self.twit.get('/statuses/user_timeline.json', options || {}, function (resp) {
        return d[!resp ? 'reject' : 'resolve'](!resp ? 'error' : resp);
    }) && d : d.reject('error') && d).promise;
};
