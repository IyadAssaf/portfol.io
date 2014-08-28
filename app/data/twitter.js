'use strict';

var Twitter, self,
    TwitterApi = require('twitter'),
    q = require('q');

/**
 * @class Twitter
 * @desc Request data from Twitter
 */
module.exports = Twitter = function (appl) {

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

    // https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
    self.twit ? self.twit.get('/statuses/user_timeline.json', options || {}, function (resp) {
        d[!resp ? 'reject' : 'resolve'](!resp ? 'error' : resp);
    }) : d.reject('error');

    return d.promise;
};
