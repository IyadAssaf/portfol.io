var express = require('express'),
    app = express(),
    fs = require('fs');

app
.use(express.static('public'))
.set('port', process.env.PORT || 3000)
.listen(app.get('port'), function () {
    console.log('Express app listning on port: ' + app.get('port'));
});

app.get('/', function (req, res) {
    res.write(fs.readFileSync('views/layout.html'));
    res.end();
});
