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

  geo = geoip.lookup(req.headers['x-forwarded-for'] || req.connection.remoteAddress);

  if(geo && geo.country){
    user.country = geo.country;
  }else{
    user.country = "unknown";
  }
  Users.create(user,
    function createCb(err, user){
      if(err) return res.send({error:err},400);

      res.send(Users.toObject(user));
  })

};

exports.get = function(req,res){
  var id = req.params.id;

  Users.findById(id, function findCb(err, user){
    if(err) return res.send({error:err});

    if(!user) return res.send({error:"not found"},404);


    res.send(Users.toObject(user));
  })
}
