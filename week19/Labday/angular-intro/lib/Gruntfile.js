module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.initConfig({
    jshint: {
      options: {
        predef: ["document", "console", "angular"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['../javascripts/**/*.js']
    },
    watch: {
      options: {
        livereload: true,
      },
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'watch']);
};