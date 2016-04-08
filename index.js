// Require modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var parser = require('xml2json');
var app = express();

// Import models
var mongoose = require('mongoose');
var User = require('./models/user');

// Connect to MongoDB Server
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/animefindr');

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(express.static(__dirname + '/public/'));
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// required for passport
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));
app.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));
app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email', 'public_profile'] }));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/'
}));
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
// Search for an anime
app.get('/api/anime/:id', function(req, res) {
  request('http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime='+req.params.id, 
    function(err, response, data) {
    // do conversion here call xml to json function here
    var result = parser.toJson(data);
    res.send(result)
  });
});

// Controllers
app.use('/api/users', require('./controllers/users'));


// React
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Launch App
app.listen(process.env.PORT || 3000);
