var express = require('express');
var User = require('../models/user');
var Router = express.Router();

Router.route('/')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) return res.status(500).send(err);
      res.send(users);
    });
  })
  .post(function(req, res) {
    User.create(req.body, function(err, user) {
      if (err) return res.status(500).send(err);
      res.send(user);
    });
  });



Router.post('/addFav', function(req, res) {
  // User.findById(req.user._id, function(err, user) {
  //   user.favorites.push({name:req.body.favorites});
  //   user.save();
  //   res.send(user);
  // });
  req.session.favorites.push(req.body)
  res.send(req.session.favorites)
});

Router.get('/favorites', function(req, res) {
  User.findById(req.user.id, function(err, user) {
    res.send(user.favorites);
  });
});

Router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);
    res.send(user);
  });
});


module.exports = Router;