const http = require('http');
const fs = require('fs');

const port = 3000;
const host = '127.0.0.1';
const server = http.createServer( (request, response) => {

  if(request.method === 'GET'){
    const index = fs.readFileSync('./index.html');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(index.toString());
  }
});

server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);
