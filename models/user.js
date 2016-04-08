var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    favorites        :[{
        id           : Number,
        name         : String
    }]  // push on new favorites
});

userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret.facebook._id,
      email: ret.facebook.email,
      name: ret.facebook.name
    };
    return returnJson
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;