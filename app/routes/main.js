module.exports = function () {
    'use strict';

    return function (req, res, next) {
        new require('./router.js')(req, res, [{
            path: '/',
            file: '/layout.html'
        }, {
            path: '/admin',
            file: '/layout.html'
        }]);

        next();
    };
};
