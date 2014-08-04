var app = angular.module('greatgreen',[
  'ngRoute',
  ]);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    // 
    $routeProvider.
      when('/', {
        templateUrl: 'vendors.html',
      }).
      when('/vendors', {
        templateUrl: 'vendors.html',
      }).
      when('/about', {
        templateUrl: 'about.html',
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }]);