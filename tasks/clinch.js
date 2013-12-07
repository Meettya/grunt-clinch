/*
 * grunt-clinch
 * https://github.com/shuvalov-anton/grunt-clinch
 *
 * Copyright (c) 2013 Shuvalov Anton
 * Licensed under the WTF license.
 */

'use strict';

/*
 * Dependencies
 */

var Clinch         = require('clinch');
var extend         = require('shortcode-params');
var fs             = require('fs');
var path           = require('path');

// End of dependensies

/**
 * Clinch compiler
 */
var Compilation = function (package_config, done) {
  this.clinch = new Clinch();
  this.compile(package_config, done);
};


Compilation.prototype.compile = function (package_config, done) {
  this.clinch.buldPackage(package_config, function (err, data) {
    if (err)  console.log(err);
    fs.writeFileSync(package_config.out, data);
    done && done();
  });
};


module.exports = function (grunt) {
  grunt.registerMultiTask('clinch', 'Compile common.js for browser by clinch with grunt.js', function () {

    var done = this.async();
    var options = this.options({
      package_name: this.name,
      bundle: {
        main: path.resolve(this.filesSrc[0]) // ?
      },
      out: path.resolve(this.files[0].dest),
      strict : 'on',
      inject : 'on',
      cache_modules: 'on',
      replacement: {}
    });


    new Compilation(options, function () {
      grunt.log.writeln('"%s" compiled', options.package_name);
      done();
    });

  });
};