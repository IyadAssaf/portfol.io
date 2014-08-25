/**
 * production configuration
 */
module.exports = {
    name: 'production',
    verbose: 2,
    mongo: process.env.MONGO_IYAD,
    port: process.env.PORT || 3000,
    profile: {
        github: {
            username: 'iyadassaf'
        },
        twitter: {
            username: 'iyadassaf'
        }
    }
};
