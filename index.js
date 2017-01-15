//creates a variable called 'express' for express npm package
var express = require('express');
// requires our server to use the express function
var server = express();
// creates a variable for the router
var artRouter = require('./server/routers/project.router.js');
// connects mongoose to mongoose npm package
var mongoose = require('mongoose');
// creates a variable for where our database resides
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;
// creates the database connection
mongoose.connect(mongoURI);

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root:__dirname});
});

server.get('/calc', function(req, res){
  res.sendFile('calc.html', {root: __dirname + '/public/views'});
});

server.get('/case', function(req, res){
  res.sendFile('case.html', {root: __dirname + '/public/views'});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
