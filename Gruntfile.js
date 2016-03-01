function config(name){
	return require('./tasks/' + name + '.js');
}

module.exports = function(grunt){
// configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		concat: config('concat')
	});

	//load plugins
	grunt.loadNpmTasks('grunt-contrib-concats');

	//tasks
	grunt.registerTask('default', ['concat']);

};