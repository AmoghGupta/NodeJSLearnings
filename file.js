var fs= require('fs');
//Synchronous
//var readme = fs.readFileSync('readfile.txt','utf8');
//console.log(readme);
//fs.writeFileSync('newfilecopied.txt',readme);

//Asynchronous
fs.readFile('readfile.txt','utf8',function(err,data){
  fs.writeFile("newfilecopied2",data);
});
