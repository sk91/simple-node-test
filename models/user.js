var _= require("lodash");

var User = module.expots = {

    _db: null,

    init:function(db){
      this._db = db;
    },

    findOne:function(params,cb){
      this._db.users.findOne(params,cb);
    },

    save:function(user,cb){
      this.save(user,cb);
    },

    validate:function(user){
      return true;
    },

    toJson:function(user){
      var result = _.extend({},user);
      delete result.password;
      return result;
    }

}