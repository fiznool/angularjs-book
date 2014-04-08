/* global module: false */
/* jshint strict: false */

// Testacular configuration
// Generated on Sun Feb 10 2013 20:46:15 GMT+0530 (IST)

module.exports = function(config) {
  config.set({
  // base path, that will be used to resolve files and exclude
    basePath: '',

    // Frameworks to use
    frameworks: ['ng-scenario'],

    // list of files / patterns to load in the browser
    files: [
      'app/vendor/angular-scenario/angular-scenario.js',
      'test/e2e/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress'],


    // web server port
    port: 8989,


    // cli runner port
    runnerPort: 9898,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    urlRoot: '/_karma_/',

    proxies: {
      '/': 'http://localhost:8080/'
    },


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-ng-scenario'
    ],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};