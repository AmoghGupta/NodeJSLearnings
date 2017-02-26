var express = require('express');
var app = express();
app.set('view engine', 'ejs');
//middleware
app.use('/assets', express.static('assets'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
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
