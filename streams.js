var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname+'/readfile.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writenew.txt');
myReadStream.on('data',function(chunk){
  console.log("New chunk received:");
  myWriteStream.write(chunk);
});


/*
var server = http.createServer(function(req, res){
  console.log('reuest was made from:' + req.url)
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.end('Hello world');
});

server.listen(3000,'127.0.0.1');
console.log('Now listening to port 3000');
*/
