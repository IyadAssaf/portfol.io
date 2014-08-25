module.exports = function (req, res, paths) {
    'use strict';

    /**
     * @class Router
     */
    var Router = function (_req, _res, _paths) {

        /**
         * @property paths
         * @type Array
         * @desc Describe the HTTP GET request that require authentication
         *       this only applies to layout files as inner pages are loaded
         *       using angular's ng-router
         */
        this.paths = _paths;
        self = this;
        
        // Only route paths that are registered
        return self._isRegistered(_req.path) && self.route(_req, _res);
    },
        fs = require('fs'),
        self;

    /**
     * @method route
     * @private
     * @desc Get the file and auth properties of a route
     */
    Router.prototype.route = function (req, res) {

        var i = 0;
        var path = function findRoute () {

            var current = self.paths[i];
            i++;

            return current.path === req.path ? current.auth ? req.isAuthenticated() ? self._render(res, current.file) : res.redirect(current.auth.path) : self._render(res, current.file) : findRoute();
        };

        return path();
    };

    /**
     * @method _isRegistered
     * @private
     * @desc Find out if a path is registered to be rendered
     */
    Router.prototype._isRegistered = function (path) {
        var isRegArr = [];
        for(var i in self.paths) {
            /*jshint expr:true */
            self.paths[i].path === path ? isRegArr.push(path) : null;
        }
        return !!isRegArr.length;
    };

    /**
     * @method _render
     * @private
     * @desc Load the assets and serve it to the page
     */
    Router.prototype._render = function (res, url) {
        url = process.cwd() + '/views' + url;
        res.write(fs.readFileSync(url));
        res.end();
    };

    return new Router(req, res, paths);
};
