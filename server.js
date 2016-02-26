// server.js

// modules
var express        = require('express');  
var app            = express();

// set port
var port = process.env.PORT || 1337;

// static files location 
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // configure routes

// start server on most elite port
app.listen(port, function(){
  console.log('**----- port 1337 -----**');
  console.log('**-----  run run  -----**');
  console.log('**----- ohso leet -----**');
})

// expose app
exports = module.exports = app;