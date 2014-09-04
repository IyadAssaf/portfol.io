module.exports = function (appl) {
    'use strict';

    var fs = require('fs'),
        layoutPath = process.cwd() + '/templates/views/layout.html';

    appl.app

    .get('/', function (req, res) {
        return res.write(fs.readFileSync(layoutPath)) && res.end();
    })

    .get('/post/:title', function (req, res) {
        return res.write(fs.readFileSync(layoutPath)) && res.end();
    })

    .get('/login', function (req, res) {
        return res.write(fs.readFileSync(layoutPath)) && res.end();
    })

    .get('/admin', function (req, res) {
        return req.isAuthenticated() ? res.write(fs.readFileSync(layoutPath)) && res.end() : res.redirect('/login');
    })

    .get('/admin/post', function (req, res) {
        return req.isAuthenticated() ? res.write(fs.readFileSync(layoutPath)) && res.end() : res.redirect('/login');
    })

    .get('/admin/post/:postId', function (req, res) {
        return req.isAuthenticated() ? res.write(fs.readFileSync(layoutPath)) && res.end() : res.redirect('/login');
    })

    .use(function (req, res) {
        res.redirect('/');
    });

};
