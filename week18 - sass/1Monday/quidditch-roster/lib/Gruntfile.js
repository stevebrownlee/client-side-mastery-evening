module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: ['../javascripts/main.js',],
        dest: '../dist/app.js',
      },
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json',
      },
      src: ['../javascripts/**/*.js',],
    },
    sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      javascripts: {
        files: ['../javascripts/**/*.js',],
        tasks: ['eslint', 'browserify',],
      },
    },
    clean: {
      options: { force: true, },
      public: ['../build',],
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: '../',
            src: [
              'index.html',
              'dist/**/*.js',
              'styles/**/*.css',
              'db/apiKeys.json',
            ],
            dest: '../build/',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['eslint', 'browserify', 'sass', 'watch',]);
  grunt.registerTask('deploy', ['clean', 'browserify', 'sass', 'copy',]);
  grunt.registerTask('cleanit', ['clean',]);
};