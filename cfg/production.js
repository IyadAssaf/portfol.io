/**
 * @desc production configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'production',
    verbose: 2,
    mongo: process.env.MONGO_IYAD,
    redis: {
        host: '0.0.0.0',
        port: '6379',
        pass: ''
    },
    port: process.env.PORT || 3000,
    admin: {
        username: 'username',
        password: 'password'
    }
});
