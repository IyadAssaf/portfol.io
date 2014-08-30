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
    
    // Every day at 12:30 am
    var timing = '00 30 12 * * 1-7'
    // Every second
    // var timing = '* * * * * *';
    // Every one min
    // var timing = '*/1 * * * *';

    new cron(timing, function () {
        self.log('general', 'Running script at: ' + new Date());
        sync.run();
    }, null, true);
};
