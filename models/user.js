var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  name: {
         required: true,
         type: String
  },
  email: { type: String, 
           required: true,
           unique: true  
  },
  password: { type: String, 
              required: true, 
  }
});

userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email,
      name: ret.name
    };
    return returnJson
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;