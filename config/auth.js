// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
    'clientID'    : process.env.CLIENT_ID, // your App ID
    'clientSecret'  : process.env.CLIENT_SECRET, // your App Secret
    'callbackURL'   : process.env.BASE_URL + '/auth/facebook/callback',
    'profileFields' : ['email', 'displayName']
  }


};