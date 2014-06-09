module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          'assets/css/main.css' : 'assets/sass/main.sass'
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
          './assets/js/vendor/jquery-1.10.2.min.js',
          './assets/js/vendor/modernizr-2.6.2.min.js',
          './assets/js/main.js',
          './assets/js/plugins.js'
        ],
        tasks: ['concat:frontend','uglify:frontend'],
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
          './assets/js/vendor/jquery-1.10.2.min.js',
          './assets/js/vendor/modernizr-2.6.2.min.js',
          './assets/js/main.js',
          './assets/js/plugins.js'
        ],
        dest: './assets/js/package.js',
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      frontend: {
        files: {
          './assets/js/package.js': './assets/js/package.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};
