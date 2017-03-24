var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var http = require('http');
var app = express();
var requestHandler = require('./request-handler.js');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

//Routes
require('./routes.js')(app);

//Listen
var port = process.env.PORT || 8080;
server.listen(port);
console.log('Listening on port:', port);
