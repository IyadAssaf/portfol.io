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
    twitter: {
        key: process.env.TWITTER_KEY,
        secret: process.env.TWITTER_SECRET,
        tokenKey: process.env.TWITTER_TOKEN_KEY,
        tokenSecret: process.env.TWITTER_TOKEN_SECRET
    },
    github: {
        token: process.env.GITHUB_TOKEN
    },
    port: 3000
});
