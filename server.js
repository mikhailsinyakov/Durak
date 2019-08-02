const http = require('http');
const WebSocketServer = require('websocket').server;
const websocketHandler = require('./lib/websocketHandler');

const server = http.createServer();
server.listen(8080, () => console.log('Server is listening...'));

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

const originIsAllowed = origin => origin === 'http://localhost:3000';

let id = 0;

wsServer.on('request', request => {
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