module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      js: {
          src: ['../javascripts/main.js'],
          dest: '../dist/app.js'
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      src: ['../javascripts/**/*.js']
    },
    // jshint: {
    //   options: {
    //     predef: [ "document", "console" ],
    //     esnext: true,
    //     globalstrict: true,
    //     globals: {},
    //     browserify: true
    //   },
    //   files: ['../javascripts/**/*.js']
    // },
    watch: {
      options: {
        livereload: true,
      },
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks("gruntify-eslint");

  grunt.registerTask('default', ['eslint', 'browserify', 'watch']);
};