/**
 * @desc local configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'local',
    log: ['general', 'error'],
    mongo: 'mongodb://0.0.0.0:27017/portfolio',
    redis: {
        host: '127.0.0.1',
        port: '6379',
        auth: ''
    },
    port: 3000
});
