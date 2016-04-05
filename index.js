var express = require('express');
var request = require('request');
var app = express();


app.get('/api/anime/:id', function(req, res) {
  request('http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime='+req.params.id, 
    function(err, response, data) {
    //do conversion here call xml to json function here

    var parseString = require('xml2js').parseString;
    
    parseString(data, function(err, result) {
      if (err) {
        console.log(err);
      }
      else {
        // (console.log(result.ann.anime[0].info));
        var info = result.ann.anime[0].info;
        res.send(info);
      }
    })
    // res.send(JSON.parse(data).results);
  });
});

app.use(express.static(__dirname + '/public/'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
