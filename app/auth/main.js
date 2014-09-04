'use strict';

var Authentication, self,
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

/**
 * @class Authentication
 * @desc Authenticate user sessions via different schemes
 * @requires app, passport
 */
module.exports = Authentication = function (appl) {
    this.app = appl.app

    .use(passport.initialize())
    .use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(new LocalStrategy(function (username, password, done) {
        done(null, (username === appl.cfg.admin.username && password === appl.cfg.admin.password));
    }));

    this.app.post('/login', passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login'
    }));

    this.app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    self = this;
};
