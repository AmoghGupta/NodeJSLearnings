var http = require('http');
var fs= require('fs');
var server = http.createServer(function(req, res){
  console.log('reuest was made from:' + req.url)
   if(req.url === '/home' || req.url === '/'){
     res.writeHead(200,{'Content-type':'text/html'});
     fs.createReadStream(__dirname+'/index.html').pipe(res);
   }
   else if(req.url === '/contact'){
     res.writeHead(200,{'Content-type':'text/html'});
     fs.createReadStream(__dirname+'/contact.html').pipe(res);
   }
   else if(req.url === '/api'){
     res.writeHead(200,{'Content-type':'application/json'});
     var myobj = {
       name: "Amogh",
       age: 20,
       from: "Kanpur"
     };
     res.end(JSON.stringify(myobj));
   }
   else{
      res.writeHead(404,{'Content-type':'text/html'});
      fs.createReadStream(__dirname+'/404.html').pipe(res);
   }
});

server.listen(3000,'127.0.0.1');
console.log('Now listening to port 3000');
