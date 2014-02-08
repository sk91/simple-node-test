var Users = require('../models/user');


exports.get = function(req,res){
  if (!req.user) return res.send({'logout':true});

  res.send(Users.toObject(req.user));
};


exports.create = function(req,res){
  res.send(Users.toObject(req.user));
};


exports.delete = function(req,res){
  req.logout();
  res.send({'logout':true});
}