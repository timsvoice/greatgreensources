app.controller('mainController', ['$scope', 'vendorsAPI', '$http',
  function($scope, vendorsAPI, $http) {
    var url = "data/vendors.json";
    
    $scope.vendorList = [];
    $scope.categories = [];
    $scope.states = [];

    $http.get(url, {
      cache: true
    }).
    success(function(data){
      $scope.vendorList = data;
      console.log($scope.vendorList);
      angular.forEach($scope.vendorList, function(value, index){
        
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
            console.log($scope.categories);
          }
        });
      });
    });
}]);