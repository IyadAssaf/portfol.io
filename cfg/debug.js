/**
 * @desc debug configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'debug',
    log: ['all'],
    mongo: process.env.MONGO_IYAD,
    port: 3000
};
