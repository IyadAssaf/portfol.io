'use strict';

var Sync, self;

/**
 * @class Sync
 * @desc Update the db with twitter and gh infomation
 */
module.exports = Sync = function (routine) {

    self = this;
    self.appl = routine.appl;
    self.main = routine.main;
    self.log = self.appl.log;

    // db models
    self.models = self.main.models;

    self.github = new (require('../data/github'))(self.appl);
    self.twitter = new (require('../data/twitter'))(self.appl);
};

/**
 * @class run
 * @desc Run the github and twitter classes to update the feed model
 */
Sync.prototype.run = function () {
    /* jshint camelcase: false */

    // load meta from mongo to see what the last gh and twitter events were recieved
    self.github.events().then(function (activity) {

        // add to github collection
        for(var item in activity) {
            self.models.feed.add({
                id      :   activity[item].id,
                origin  :   'github',
                type    :   activity[item].type,
                subject :   activity[item].repo,
                content :   activity[item].payload,
                date    :   activity[item].created_at,
                _json   :   activity[item],
            })
            .then(function (_item) {
                self.log('data', 'Inserted github item: ' + _item.id);
            }, function (resp) {
                self.log('data', 'Error inserting github item: ' + resp.item.id + ' with error: ' + resp.err);
            });
        }
    });

    self.twitter.events().then(function (activity) {

        // add to github collection
        for(var item in activity) {
            self.models.feed.add({
                id      :   activity[item].id,
                origin  :   'twitter',
                type    :   'status',
                subject :   {},
                content :   {
                                text: activity[item].text
                            },
                date    :   activity[item].created_at,
                _json   :   activity[item],
            })
            .then(function (_item) {
                self.log('data', 'Inserted twitter item: ' + _item.id);
            }, function (resp) {
                self.log('data', 'Error inserting twitter item: ' + resp.item.id + ' with error: ' + resp.err);
            });
        }
    });


};
