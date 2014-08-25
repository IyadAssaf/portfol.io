'use strict';

var Post, self, q = require('q');

/**
 * @class Post
 * @desc Blog post database model and methods
 */

module.exports = Post = function (appl) {

    this.db = appl.db;

    this.Model = this.db.model('Post', new this.db.Schema({
        title   :   String,
        body    :   String,
        date    :   Date
    }));
    this.ObjectId = this.db.ObjectId;

    self = this;
};

/**
 * @method load
 * @desc Load a post either from Id or title
 * @param arguments {Object} Mongo find query obj
 */
Post.prototype.load = function () {

    var d = q.defer();

    self.Model
    .find((arguments && arguments[0]) || {})
    .limit(1)
    .exec(function (err, posts) {
        console.log(JSON.stringify(posts, null, 4));
        d[err ? 'reject' : 'resolve'](err ? err : posts);
    });

    return d.promise;
};

/**
 * @method query
 * @desc Query posts
 * @param arguments {Object} {
 *                              query: {Object} Mongo find query object
 *                              limit: {Int} Maxiumum documents to return
 *                           }
 */
Post.prototype.query = function () {

    var d = q.defer();

    self.Model
    .find((arguments && arguments[0] && arguments[0].query) || {})
    .limit((arguments && arguments[0] && arguments[0].limit) || null)
    .exec(function (err, posts) {
        d[err ? 'reject' : 'resolve'](err ? err : posts);
    });

    return d.promise;
};
