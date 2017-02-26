var express = require('express');
var bodyparser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyparser.urlencoded({extended:false});

app.set('view engine', 'ejs');
//middleware
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
  console.log(req.body);
  res.render('contact' ,{request: req.query});
});

app.post('/contact',urlencodedParser, function(req, res) {
  res.render('contact-success' ,{data: req.body});
});

app.get('/profile/:name', function(req, res) {
    var data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    };

    res.render('profile', {
        person: req.params.name,
        data: data
    });
});
app.listen(3000);
