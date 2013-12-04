/*
    Prepare: `npm install -g grunt-cli`
*/

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js', 'lib/**/*.js'],
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['jshint']);
};