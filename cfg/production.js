/**
 * @desc production configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'production',
    log: ['error'],
    port: process.env.PORT || 8000,
    mongo: process.env.MONGO_IYAD,
    redis: {
        host: '0.0.0.0',
        port: '6379',
        pass: ''
    },
    twitter: {
        key: process.env.TWITTER_KEY,
        secret: process.env.TWITTER_SECRET,
        tokenKey: process.env.TWITTER_TOKEN_KEY,
        tokenSecret: process.env.TWITTER_TOKEN_SECRET
    },
    admin: {
        username: 'username',
        password: 'password'
    }
});
