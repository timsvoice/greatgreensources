app.controller('mainController', ['$scope', '$routeParams', '$location', '$anchorScroll', 'vendorsAPI', '$http',
  function($scope, $routeParams, $location, $anchorScroll, vendorsAPI, $http) {
    
    var vendorsUrl = "data/vendors.json";

    $scope.vendorList = [];
    $scope.names = [];
    $scope.categories = [];
    $scope.states = [];
    $scope.vendor = [];

    $http.get(vendorsUrl, {
      cache: true
    }).
    success(function(data){
      $scope.vendorList = data;

      angular.forEach($scope.vendorList, function(vendor){
        if (vendor.name == $routeParams.name)
          $scope.vendor = vendor;
      });

      angular.forEach($scope.vendorList, function(value, index){
        // create list of vendor names
        angular.forEach(value.name, function(name, index){
          $scope.names.push(name);
        });
        // create categories for catList model
        angular.forEach(value.categories, function(categoryList, index){
          // only add categories if they don't already exist
          var exists = false;
          // loop through categories
          angular.forEach($scope.categories, function(category, index){
            if (category == categoryList) {
              exists = true;
            }
          });
          // if category is unique, add to categories
          if (exists === false) {
            $scope.categories.push(categoryList);
          }
        });
      });
    });

}]);
app.controller('menu', ['$scope', '$location', function ($scope, $location) {
  $scope.location = $location;
}]);

app.controller('vendorCtrl', ['$scope','$routeParams', function($scope, $routeParams){
  $scope.vendor = {
    name: $routeParams.name
  };
}]);

app.controller('imagesCtrl', ['$scope', function ($scope) {
    var folderContents = require('folder-contents');
    var options = {
      "path" : "/data",
      "recursively": "true"
    };

    var imagesResult = folderContents(options);
    console.log(imagesResult);
}]);