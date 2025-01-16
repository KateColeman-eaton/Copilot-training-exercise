// Create web server

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url === '/styles.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    fs.createReadStream('styles.css').pipe(res);
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('index.html').pipe(res);
  }
}).listen(3000);

console.log('Server running at http://localhost:3000/');