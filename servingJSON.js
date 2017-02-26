var http = require('http');
var server = http.createServer(function(req, res){
  console.log('reuest was made from:' + req.url)
   res.writeHead(200,{'Content-Type':'application/json'});
   var myobject ={
     name: 'Ryu',
     job: 'Ninja',
     age: 29
   };
   res.end(JSON.stringify(myobject));
});

server.listen(3000,'127.0.0.1');
console.log('Now listening to port 3000');
