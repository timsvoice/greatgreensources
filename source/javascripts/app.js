var app = angular.module('greatgreen',[
  'ngRoute',
  ]);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
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
      when('/services', {
        templateUrl: 'services.html',
      }).
      when('/vendors/:name', {
        templateUrl: 'vendors/template.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }]);
