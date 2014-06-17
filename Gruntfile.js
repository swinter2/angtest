module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'library/scss',
          src: ['*.scss'],
          dest: 'library/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: 'library/scss/*.scss',
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);

};