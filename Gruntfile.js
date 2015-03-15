module.exports = function(grunt) {

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: 'inline',
        experimental: true,
        optional: ['runtime'],
      },
      build: {
        src: 'src/*.js',
        expand: true,
        flatten: true,
        dest: 'build',
      }
    },
    clean: {
      build: 'build',
    },
    watch: {
      babel: {
        files: ['<%= babel.build.src %>'],
        tasks: ['build'],
      }
    }
  });

  grunt.registerTask('build', ['clean', 'babel']);
  grunt.registerTask('default', ['build']);

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
