import { w3cwebsocket } from 'websocket';

const websocket = {
  client: null,
  connect() {
    if (!this.client) {
      this.client = new w3cwebsocket('ws://localhost:8080/', 'echo-protocol');
    }
  },
  listen(fn) {
    this.client.onclose = () => fn('closed');
    this.client.onerror = error => fn('error', error);
    //this.client.onopen = () => fn('open');
    this.client.onmessage = message => 
      fn('message', JSON.parse(message.data));
  },
  send(messageObject) {
    const message = JSON.stringify(messageObject);
    if (this.client.readyState === this.client.OPEN) {
      this.client.send(message);
    } else {
      this.client.onopen = () => this.client.send(message);
    }
  },
  close() {
    if (this.client) {
      this.client.close();
      this.client = null;
    }
  }
};

export default websocket;