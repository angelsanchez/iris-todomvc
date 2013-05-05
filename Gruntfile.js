module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'src/app/**/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.iris.baseUri %>**/*.js',
        dest: '<%= pkg.iris.init %>'
      }
    },
    connect: {
      dev: {
        options: {
          base: 'src'
        }
      },
      dist: {
        options: {
          base: 'dist'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['jshint', 'uglify'],
        options: {
          nospawn: true
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'}
        ]
      }
    },
    clean: ['dist']
  });
  
  grunt.registerTask('iris-tmpl', function() {
    grunt.log.writeln('Concatenate Iris templates...');

    var pkg = grunt.file.readJSON('package.json');
    var irisBaseUri = pkg.iris.baseUri;
    var destFile = pkg.iris.init;
    grunt.log.writeln('Configurations: pkg.iris.baseUri[' + irisBaseUri + '] pkg.iris.init[' + destFile + ']');
    
    var templates = '';
    grunt.file.expand({cwd : irisBaseUri}, '**/*.html').forEach(function(file){
        var source = grunt.file.read(irisBaseUri + file, {encoding : "utf8"}).replace(/[\r\n\t]/g, '').replace(/\"/g, '\\"');
        templates += 'iris.tmpl("' + file + '", "' + source + '");\n';
    });

    var irisTmpl = grunt.file.read(destFile, {encoding : "utf8"}) + templates;
    grunt.file.write(destFile, irisTmpl);
    grunt.log.writeln('File "' + destFile + '" saved.');
  });

  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'uglify', 'iris-tmpl']);
  grunt.registerTask('devserver', ['jshint', 'connect:dev', 'watch']);
  grunt.registerTask('distserver', ['default', 'connect:dist', 'watch']);


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
