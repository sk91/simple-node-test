var _= require("lodash")
  , bcrypt = require('bcrypt');

var User = module.expots = {

    _db: null,

    init:function(db){
      this._db = db;
    },

    findOne:function(params,cb){
      this._db.users.findOne(params,cb);
    },

    create: function(user,cb){
      this.validate(user,validateCb.bind(this));

      function validateCb(err){
        if(err) return cb(err);

        this.createHash(user.password,hashCreatedCb.bind(this));  
      }

      function hashCreatedCb(err,password){
        if(err) return cb(err);

        user.password = password;
        this._db.users.save(user,userCreatedCb.bind(this));
      }

      function userCreatedCb(err, user){
        if(err) return cb(err);

        if(!user){
          return cb("not found");
        }

        return cb(null, user);
      }

    },


    validate:function(user, cb){
      if(!user.email || user.email.indexOf('@') < 0){
        return cb("invalid email");
      }

      if(!user.password){
        return cb('invalid password'));
      }

      return cb(null,user);
    },

    

    validatePassword: function(user, password,cb){
      bcrypt.compare(password, user.password, cb);
    },

    createHash:function(password, cb){
      bcrypt.hash(password, 5 , cb);
    }




}