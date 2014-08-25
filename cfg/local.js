/**
 * @desc local configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'local',
    verbose: 2,
    mongo: process.env.MONGO_IYAD,
    port: 3000
};
