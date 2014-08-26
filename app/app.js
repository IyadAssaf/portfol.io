var App,
    self,
    express = require('express')
    fs = require('fs');

/**
 * @class App
 */
module.exports = App = function (cfg) {
    this.cfg = cfg;

    self = this;

    return self._listen();
};

/**
 * @method _listen
 * @private
 * @desc Start the app
 */
App.prototype._listen = function () {

    var d = require('q').defer();

    // main application setup
    // setup express and properties
    self.app = express()
    .set('port', self.cfg.port)
    .use(require('cookie-parser')())
    .use(express.static(process.cwd() + '/app/public'))
    .use(require('express-session')({
        secret: 'secret',
        key: 'portfol.io.sid',
        resave: true,
        saveUninitialized: true
    }));

    // setup server, bind with socket.io and listen
    self.server = require('http').Server(self.app);
    self.socket = require('socket.io')(self.server);

    // controllers for data and transport to client
    new (require('./controllers/main.js'))(self);
    new (require('./routes/main.js'))(self);
    
    self.server.listen(self.app.get('port'), function () {
        console.log('Listening to port ' + self.cfg.port);

        // resolve the promise
        d.resolve(self);

        // Upon exiting the program through any means, the server must close and restart
        process.on('exit SIGTERM uncaughtException', self.server.close);
    });

    return d.promise;
};
