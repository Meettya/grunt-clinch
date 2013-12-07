/*
 * grunt-clinch
 * https://github.com/shuvalov-anton/grunt-clinch
 *
 * Copyright (c) 2013 Shuvalov Anton
 * Licensed under the WTF license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    clinch: {
      site: {
        files: {
          'tmp/out.js': 'test/fixtures/1.js'
        }
      }
      // custom_options: {
      //   options: {
      //     watch: true,
      //     punctuation: ' !!!',
      //   },
      //   files: {
      //     'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123'],
      //   },
      // },
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', 'clinch');

};
