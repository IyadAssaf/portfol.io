'use strict';

var Api, self;

module.exports = Api = function (_appl) {

    this.appl = _appl;

    /**
     * Connect to mongo server
     */
    this.db = require('mongoose').connect(this.appl.cfg.mongo);

    /**
     * Models
     */
    this.feed = new (require('../models/feed.js'))(this);
    this.post = new (require('../models/post.js'))(this);

    self = this;
};
