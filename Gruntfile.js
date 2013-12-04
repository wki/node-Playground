/*
    Prepare: `npm install -g grunt-cli`
*/

module.exports = function(grunt) {
    grunt.initConfig({
        // allow access to pkg.* inside other targets.
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            'Gruntfile.js': 'Gruntfile.js', 
            'lib/**/*.js':  'lib/**/*.js',
        },
        
        vows: {
            all: {
                options: {},
                src: ['test/*.js'],
            },
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-vows');
    
    grunt.registerTask('default', 'do all steps to build our app', 
        ['jshint', 'vows']
    );
};