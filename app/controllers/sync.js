'use strict';

var Sync, self,
    cron = require('cron').CronJob,
    q = require('q');

/**
 * @class Sync
 * @desc Update the db with twitter and gh infomation
 */
module.exports = Sync = function (appl) {

    // db models
    this.models = appl.models;

    this.github = new (require('../data/github'))(appl);
    this.twitter = new (require('../data/twitter'))(appl);

    self = this;
};

Sync.prototype.run = function () {

    // load meta from mongo to see what the last gh and twitter events were recieved
    self.github.events().then(function (activity) {
        // add to github collection
        // console.log(JSON.stringify(activity, null, 4));

        self.models.feed.add({ type: 'github', event: activity });
    });
    
    self.twitter.events().then(function (activity) {
        // add to twitter collection
        // console.log(JSON.stringify(activity, null, 4));
        self.models.feed.add({ type: 'twitter', event: activity });
    });
};
