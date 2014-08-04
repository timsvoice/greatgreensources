var app = angular.module('greatgreen',[
  'ngRoute',
  ]);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    // 
    $routeProvider.
      when('/', {
        templateUrl: 'vendors',
      }).
      when('/vendors', {
        templateUrl: 'vendors',
      }).
      when('/about', {
        templateUrl: 'about',
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }]);
