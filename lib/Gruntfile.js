"use strict"

module.exports = function(grunt) {

  grunt.initConfig({
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
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
}