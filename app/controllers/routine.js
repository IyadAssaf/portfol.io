'use strict';

var Routine, self,
    cron = require('cron').CronJob,
    q = require('q');

/**
 * @class Routine
 * @desc Update the db with twitter and gh infomation
 */
module.exports = Routine = function (main) {

    self = this;
    self.main = main;
    self.appl = main.appl;
    self.log = self.appl.log;

    // sync class
    var sync = self.sync = new (require('./sync'))(self);
    sync.run();

    // run the update script at a set interval using CRON
    new cron(self.appl.cfg.cron, function () {
        self.log('general', 'Running script at: ' + new Date());
        sync.run();
    }, null, true);
};
