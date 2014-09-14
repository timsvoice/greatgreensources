app.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'vendors.html',
    controller: 'mainController'
  });

  $routeProvider.when('/vendors', {
    templateUrl: 'vendors.html',
    controller: 'mainController'
  });

  $routeProvider.when('/images', {
    templateUrl: 'images.html',
    controller: 'mainController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
