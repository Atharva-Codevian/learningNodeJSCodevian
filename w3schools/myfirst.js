var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
 // res.end('Hey the process ended above ! ! !');
}).listen(8080);
