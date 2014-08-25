/**
 * @desc debug configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'debug',
    verbose: 5,
    mongo: process.env.MONGO_IYAD,
    port: 3000
};
