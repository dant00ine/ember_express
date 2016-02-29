// mongoose.js

// modules
var mongoose = require('mongoose');
var fs = require('fs');

// connect to mongoose database
mongoose.connect('mongodb://localhost/ember_express');

var models_path = __dirname + '/models';
console.log("Models path:", models_path);

// find appropriate model for 
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file)
	}
})