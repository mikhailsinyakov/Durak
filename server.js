const http = require('http');
const express = require('express');
const path = require('path');
const WebSocketServer = require('websocket').server;
const websocketHandler = require('./lib/websocketHandler');
require('dotenv').config();

const isRussian = acceptLanguage => {
	const languages = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
	const language = languages[0] || 'en';
	return language === 'ru' || language === 'ru-RU';
};

const app = express();
app.get('/', (req, res) => {
  const acceptLanguage = req.header('Accept-Language');
	if (isRussian(acceptLanguage)) res.redirect('/ru');
  else res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/ru', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'build')));

const server = http.createServer(app);
server.listen(process.env.PORT, () => console.log('Server is listening...'));

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

const originIsAllowed = origin => origin === process.env.APP_URL;

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