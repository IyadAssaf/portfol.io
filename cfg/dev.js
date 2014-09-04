/**
 * @desc dev configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'dev',
    log: ['all'],
    mongo: process.env.PORTFOLIO_MONGO,
    port: 3000
});
