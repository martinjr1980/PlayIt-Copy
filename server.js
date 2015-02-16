var express = require('express');
var connect = require('connect');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes/routes.js')(app);

app.set('port', 1234);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function(){
    console.log('Tacos are happening on port ' + app.get('port'));
})

