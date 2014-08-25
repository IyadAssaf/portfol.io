'use strict';

var Comment, self, q = require('q');

/**
 * @class Comment
 * @desc Comment on a post or feed
 */
module.exports = Comment = function (appl) {

    this.db = appl.db;

    this.Model = this.db.model('Comment', new this.db.Schema({
        title   :   String,
        body    :   String,
        date    :   Date
    }));
    this.ObjectId = this.db.ObjectId;

    self = this;
};

/**
 * @method query
 * @desc Query comments
 * @param arguments {Object} {
 *                              query: {Object} Mongo find query object
 *                              limit: {Int} Maxiumum documents to return
 *                           }
 */
Comment.prototype.query = function () {

    var d = q.defer();

    self.Model
    .find((arguments && arguments[0] && arguments[0].query) || {})
    .limit((arguments && arguments[0] && arguments[0].limit) || null)
    .exec(function (err, posts) {
        d[err ? 'reject' : 'resolve'](err ? err : posts);
    });

    return d.promise;
};


/**
 * @method post
 * @desc Post a comment
 */
Comment.prototype.post = function () {

    var d = q.defer(),
        model = new self.Model();

    model.save(function (err) {
        d[err ? 'reject' : 'resolve'](err ? err : true);
    });

    return d.promise;
};
