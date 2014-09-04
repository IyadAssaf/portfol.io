/**
 * @desc Properties common to all cfg files
 */
module.exports = {
    profile: {
        github: {
            username: 'iyadassaf'
        },
        twitter: {
            username: 'iyadassaf'
        },
        image: 'https://avatars.githubusercontent.com/u/2248805?v=2',
        bio: 'All the things developer, Audio hacker.'
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
    admin: {
        username: 'username',
        password: 'password'
    },
    cron: '00 30 12 * * 1-7',
    mongo: process.env.PORTFOLIO_MONGO
};
