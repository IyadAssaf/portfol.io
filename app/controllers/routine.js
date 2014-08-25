'use strict';

var Routine, self,
    cron = require('cron'),
    q = require('q');

/**
 * @class Routine
 * @desc Update the db with twitter and gh infomation
 */
module.exports = Routine = function (appl) {

    // db models
    this.models = appl.models;
    
    this.github = new (require('../data/github'))(appl);
    this.twitter = new (require('../data/twitter'))(appl);

    self = this;
};

Routine.prototype.listen = function () {

    // feed model
    // this.data.feed

    // post model
    // this.data.post
};

Routine.prototype.schedule = function () {

};
