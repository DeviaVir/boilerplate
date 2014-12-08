module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          'assets/dist/main.css' : 'assets/sass/main.sass'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/**/*.scss', 'assets/**/*.sass'],
        tasks: ['sass']
      },
      frontend: {
        files: [
          './assets/js/vendor/*.js',
          './assets/js/*.js'
        ],
        tasks: ['concat:frontend'],
        options: {
          livereload: true
        }
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      frontend: {
        src: [
          './assets/js/vendor/*.js',
          './assets/js/*.js'
        ],
        dest: './assets/dist/package.js',
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      frontend: {
        files: {
          './assets/dist/package.js': './assets/dist/package.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['concat:frontend', 'uglify:frontend']);
};
