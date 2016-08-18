"use strict"

module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js':['../js/quiz.js'] // browserify creates a file called app.js, whose entry file is quiz.js
    },
    jshint: {
      options: {
        predef: [ "document", "console" ], //predefined variables not to yell at us about
        esnext: true, //it's okay to start using ES6 syntax, plz lower your voice.
        globalstrict: true,
        globals: {"CarLot": true}, //use 'use strict' statement
        browserify: true
      },
      files: ['../scripts/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['../scripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
}