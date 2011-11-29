var http = require('http');

function debug(str){
  console.log(str);
}

function inspect(obj){
  debug(require('util').inspect(obj));
}

var server = http.createServer(function(req, res){
  var content = 'hello,world\r\n';
  res.writeHead(200, {
    'content-type' : 'text/plain',
    'content-length' : content.length
  });

  res.end(content);
});

var PORT = 3458;
var MAX_CONN_PER_IP = 10;

server.listen(PORT);

var doFilter = require('./server_filter').fn;

doFilter(server, MAX_CONN_PER_IP);


