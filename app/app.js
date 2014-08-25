var App,
    self,
    express = require('express');

/**
 * @class App
 */
module.exports = App = function (cfg) {
    this.cfg = cfg;

    self = this;

    return self._listen();
};

/**
 * @method listen
 * @desc Start the app
 */
App.prototype._listen = function () {

    var d = require('q').defer();

    // main application setup
    // setup express and properties
    self.app = express()
    .set('port', self.cfg.port)
    .use(express.static(process.cwd() + '/app/public'));

    // setup server, bind with socket.io and listen
    self.server = require('http').Server(self.app);
    self.socket = require('socket.io')(self.server);

    self.app.get('/', function (req, res) {
        res.write(require('fs').readFileSync(process.cwd() + '/views/layout.html'));
        res.end();
    });

    // controllers for data and data transport to client
    new (require('./controllers/main.js'))(self);

    self.server.listen(self.app.get('port'), function () {
        console.log('Listening to port ' + self.cfg.port);

        // resolve the promise
        d.resolve(self);

        // Upon exiting the program through any means, the server must close and restart
        process.on('exit SIGTERM uncaughtException', self.server.close);
    });

    return d.promise;
};
