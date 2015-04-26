// server.js
'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

server.listen(port);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
}); 


io.sockets.on('connection', function(socket) {

  // send message event
  socket.on('send message', function(data) {

    // new message event
    io.sockets.emit('new message', data.message);

  });

});


