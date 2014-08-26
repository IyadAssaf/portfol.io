module.exports = function (appl) {
    'use strict';

    var fs = require('fs'),
        app = appl.app

    .get('/', function (req, res) {
        res.write(fs.readFileSync(process.cwd() + '/views/layout.html'));
        res.end();
    })

    .get('/post/:title', function (req, res) {
        res.write(fs.readFileSync(process.cwd() + '/views/layout.html'));
        res.end();
    })

    .get('/admin', function (req, res) {
        res.write(fs.readFileSync(process.cwd() + '/views/layout.html'));
        res.end();
    })

    .get('/admin/create', function (req, res) {
        res.write(fs.readFileSync(process.cwd() + '/views/layout.html'));
        res.end();
    })

    .get('/admin/edit/:post', function (req, res) {
        res.write(fs.readFileSync(process.cwd() + '/views/layout.html'));
        res.end();
    })

    .use(function (req, res) {
        res.redirect('/');
    });

};
