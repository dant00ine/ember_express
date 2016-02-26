// mongoose.js

// modules
var mongoose = require('mongoose');
var fs = require('fs');

// connect to mongoose database
mongoose.connect('');

var models_path = __dirname + '/models'

// find appropriate model for 
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file)
	}
})