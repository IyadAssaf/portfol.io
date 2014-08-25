/**
 * @desc production configuration
 */
module.exports = require('util')._extend(require('./common.js'), {
    name: 'production',
    verbose: 2,
    mongo: process.env.MONGO_IYAD,
    port: process.env.PORT || 3000,
});
