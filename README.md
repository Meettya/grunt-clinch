# grunt-clinch

> Compile common.js for browser by clinch with grunt.js

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-clinch --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-clinch');
```

## The "clinch" task

### Overview
In your project's Gruntfile, add a section named `clinch` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bundleName: {
    options: {
      strict : 'on',
      inject : 'on',
      cache_modules: 'on',
      replacement: {}
    },
    files: {
      'out.js': [in.js] // Only one file. Sorry =(
    }
  }
});
```

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/shuvalov-anton/grunt-clinch/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

