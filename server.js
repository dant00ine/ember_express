// server.js

// modules
var express        = require('express');  
var app            = express();

// static files location 
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // configure routes

// start server on most elite port
app.listen(1337, function(){
  console.log('**----- port 1337 -----**');
  console.log('**----- ohso leet -----**');
})


// expose app
exports = module.exports = app;