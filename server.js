const http = require('http');
const express = require('express');
const path = require('path');
const WebSocketServer = require('websocket').server;
const websocketHandler = require('./lib/websocketHandler');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = http.createServer(app);
server.listen(process.env.PORT || 80, () => console.log('Server is listening...'));

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

const originIsAllowed = origin => origin === 'https://durak-app.herokuapp.com:80/';

let id = 0;

wsServer.on('request', request => {
  console.log('request')
  if (!originIsAllowed(request.origin)) {
    request.reject();
    return;
  }
  const userId = id++;
  const connection = request.accept('echo-protocol', request.origin);
  websocketHandler.addUser(userId, connection);
  connection.on('message', message => {
    const msgObject = JSON.parse(message.utf8Data);
    websocketHandler.handleMessage(userId, msgObject);
  });
  connection.on('close', () => {
    websocketHandler.deleteUser(userId);
  });
});