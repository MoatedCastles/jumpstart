var http = require('http');

var server = http.createServer(function(req, res){
  res.end('app is alive');
})

server.listen(port='3006', function(){
  console.log('listening on port 3006');
})