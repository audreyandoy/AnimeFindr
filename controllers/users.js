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

Router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);
    res.send(user);
  });
});

module.exports = Router;