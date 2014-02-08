var Users = require('../models/user');

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
};


exports.serialize = function(user, done) {
  done(null, user._id);
};

exports.deserialize=function(id, done) {
  Users.findById(id, function(err, user) {
    done(err, user);
  });
};