'use strict';

var Api, self;

module.exports = Api = function (_appl) {

    self = this;

    self.appl = _appl;

    /**
     * Connect to mongo server
     */
    self.db = require('mongoose').connect(self.appl.cfg.mongo);

    /**
     * Models
     */
    self.feed = new (require('../models/feed.js'))(self);
    self.post = new (require('../models/post.js'))(self);
};
