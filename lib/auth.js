var Users = require('../models/users');

exports.authanticate = function(email, password, done) {
    Users.findOne({email:email}, userFoundCb);

    function userFoundCb(err, user){
      if(err) return done(err);

      if(!user) return done(null,false, "Incorrect email");

      Users.validatePassword(user, password, passwordValidated);

      function passwordValidated(err, isValid){
        if(err) return done(err);

        if(!isValid){
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null,user);
      }
    }
};

exports.config = {
  usernameField: 'email',
  passwordField: 'password'
},
