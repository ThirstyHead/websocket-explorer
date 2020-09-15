const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

const port = 3000;
const host = '127.0.0.1';
const server = http.createServer( (request, response) => {

  if(request.method === 'GET'){
    const index = fs.readFileSync('./index.html');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(index.toString());
  }

});

const wsServer = new WebSocket.Server({server});
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);

wsServer.on('connection', (ws) => {
  ws.send('Welcome!');

  ws.on('message', (msg) => {
    console.log(msg);
  });
});

