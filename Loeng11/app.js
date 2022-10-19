const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;


const server = http.createServer(function (req, res) {
const queryData = url.parse(req.url, true).query;
  res.writeHead(200, {"Content-Type": "text/plain"});
    console.log(queryData.nimi);
    
    if (queryData.nimi) {
      res.end('Tere ' + queryData.nimi + '\n');
  
    } else {
      res.end("Tere Maailm\n");
    }
    console.log('Tere ' + queryData.nimi);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});