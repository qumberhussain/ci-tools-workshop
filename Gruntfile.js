'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.initConfig({
        eslint: {
            options: {
                fix: true
            },
            target: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        },
        sasslint: {
            options: {
                configFile: '.sass-lint.yml'
            },
            target: ['src/**/*.scss']
        }
    });

    grunt.registerTask('test', ['eslint', 'sasslint']);
};
