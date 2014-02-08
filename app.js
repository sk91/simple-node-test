
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var session = require('./routes/session');
var http = require('http');
var path = require('path');
var db = require('mongojs')('embrasse',['users']);

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , auth = require('./lib/auth');


//init passport
passport.use(new LocalStrategy(auth.config,auth.authanticate));



//init models
require('./models/user').init(db);



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'Super duber embrasse secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);

app.post('/users', user.create);
app.get('/users/:id',user.get);

app.get('/session',session.get);
app.post('/session', passport.authenticate('local') ,session.create);
app.delete('/session',session.delete);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
