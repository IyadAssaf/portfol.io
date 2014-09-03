'use strict';

var Feed, self,
    moment = require('moment'),
    q = require('q');

/**
 * @class Feed
 * @desc Data from Github and Twitter and blog posts
 */
module.exports = Feed = function (api) {

    self = this;
    self.db = api.db;
    self.ObjectId = self.db.ObjectId;
    self.appl = api.appl;
    self.log = self.appl.log;

    self.Model = self.db.model('Feed', new self.db.Schema({

        // Github or Twitter id
        id      :   String,

        // origin of content (github or twitter)
        origin  :   String,

        // type of item:
        //      **github**
        //      PushEvent
        //      WatchEvent
        //      CreateEvent
        //      **twitter**
        //      status
        type    :   String,

        // Related user/repo
        subject :   Object,

        // Content associated with the action (commit message/status message)
        content:    Object,

        // raw reponse data
        _json   :   Object,

        date    :   Date
    }));
};

/**
 * @method add
 */
Feed.prototype.add = function (obj) {

    var item = new self.Model(obj),
        d = q.defer();

    // make sure it doesn't already exist
    self.Model
    .find({ id: obj.id, origin: obj.origin })
    .limit(1)
    .exec(function (err, hasItem) {
        ((hasItem.length || err) ? function () {
            d.reject(item);
        } : function () {
            self.log('data', 'Inserting ' + item.origin + ' item: ' + item.id);

            // Prettify the date for easier UI templating
            item.prettyDate = obj.date ? moment(obj.date).format("MMM Do YY") : undefined;

            item.save(function (_err) {
                d[_err ? 'reject' : 'resolve'](_err ? _err : item);
            });
        })();
    });

    return d.promise;
};

/**
 * @method query
 */
Feed.prototype.query = function (args) {

    var d = q.defer();

    self.Model
    .find((args && args.query) || {})
    .limit((args && args.limit) || null)
    .skip((args && args.skip) || null)
    .sort((args && args.sort) || null)
    .exec(function (err, feed) {
        d[err ? 'reject' : 'resolve'](err ? err : feed);
    });

    return d.promise;
};

/**
 * @method update
 */
Feed.prototype.update = function () {

};

/**
 * @method loadUpdate
 * @desc get the time where the feed was last was updated from twitter and github
 * @returns lastUpdated {Date} Time that the feed was last updated
 */
Feed.prototype.lastUpdated = function () {

};
