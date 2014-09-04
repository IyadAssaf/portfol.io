/**
 * @desc test configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'test',
    log: ['info'],
    mongo: 'mongodb://0.0.0.0:27017/portfolio',
    port: 3000,
    redis: {
        host: '0.0.0.0',
        port: '6379',
        pass: ''
    }
};
