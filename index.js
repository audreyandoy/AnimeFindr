var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var parser = require('xml2json');
var app = express();

// var audrey = new User ({
//   firstName: 'Audrey',
// })

app.get('/api/anime/:id', function(req, res) {
  request('http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime='+req.params.id, 
    function(err, response, data) {
    //do conversion here call xml to json function here
    var result = parser.toJson(data);
    res.send(result)

    // res.send(JSON.parse(data).results);
  });
});

app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//models
var mongoose = require('mongoose');
var User = require('./models/user');
mongoose.connect('mongodb://localhost/animefindr');

//controllers
app.use('/api/users', require('./controllers/users'));


app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
