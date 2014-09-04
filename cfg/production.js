/**
 * @desc production configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'production',
    log: ['all'],
    port: process.env.PORT || 8000,
    redis: {
        host: '0.0.0.0',
        port: '6379',
        pass: ''
    }
});
