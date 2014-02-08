var Users = require('../models/user.js')
  , geoip = require('geoip-lite');
/*
 * GET users listing.
 */

exports.create = function(req, res){
  var user = {}
    , geo;

  user.email = req.body.email;
  user.password = req.body.password;
  geo = geoip.lookup(req.ip);

  if(geo && geo.country){
    user.country = geo.country;
  }

  Users.create(user, function(err, user){
    if(err) return res.send({error:err},400);
    delete user.password;
    res.send(user);
  })

};

exports.get = function(req,res){
  res.send("respond with a resource");
}