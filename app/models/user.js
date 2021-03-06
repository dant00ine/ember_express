var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :String,
	password	:String,
	email		:String,
	created_at  :{ type: Date, default: Date.now }
});

mongoose.model("User", userSchema);