/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/bower/jquery/dist/jquery.min.js",
        "vendor/bower/jquery.lazyload/jquery.lazyload.min.js",
        "vendor/js/angular.js",
        "vendor/js/angular-resource.js",
        "vendor/js/angular-route.js",
        "vendor/js/underscore.js",
        "vendor/bower/owl-carousel/owl-carousel/owl.carousel.js",
        "vendor/bower/ngDialog/js/ngDialog.min.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ],
    },
    
    css: {
      vendor: [
       "vendor/bower/owl-carousel/owl-carousel/owl.carousel.css",
       "vendor/bower/owl-carousel/owl-carousel/owl.theme.css",
       "vendor/bower/ngDialog/css/ngDialog.min.css",
       "vendor/css/**/*.css"
      ]
    },

    sass: {
      main:"app/css/app.{sass,scss}"
    }
  };
};
