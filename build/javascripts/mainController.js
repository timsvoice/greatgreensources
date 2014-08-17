app.controller('mainController', ['$scope', '$location', 'vendorsAPI', '$http',
  function($scope, $location, vendorsAPI, $http) {
    var vendorsUrl = "data/vendors.json";
    var url = 'https://www.googleapis.com/drive/v2/files/';

    $scope.driveList = [];
    $scope.vendorList = [];
    $scope.categories = [];
    $scope.states = [];

    $http.get(vendorsUrl, {
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

    var authCode = "ya29.WQArNsXoaGFl-iEAAAArXJyD7BV_HT0i8v9Ls_DXYMuGtaWgd1HbLEm59S44_fFQs-F-hbTMmnZaJTHJQiI";

    $http.get(url,{
      headers: {
        "Authorization": "Bearer " + authCode,
      }
    }).
    success(function(data){
      $scope.driveList = data;
      console.log($scope.driveList);
    }).error(function(){
      console.log("google error");
    });
}]);

app.controller('menu', ['$scope', '$location', function ($scope, $location) {
  $scope.location = $location;
}]);
