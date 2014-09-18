app.controller('mainController', ['$scope', '$location', 'vendorsService','ngDialog', '$http', '$document', '$anchorScroll',
  function($scope, $location, vendorsAPI, ngDialog, $http, $document, $anchorScroll) {
    var vendorsUrl = "/vendors/data";

    $scope.vendorList = [];
    $scope.categories = [];
    $scope.states = [];

    $scope.location = $location;

      $scope.openDefault = function () {
        ngDialog.open({
          template: 'firstDialogId',
          controller: 'InsideCtrl',
          className: 'ngdialog-theme-default'
        });
      };
    
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };

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
            if (category === categoryList) {
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

    app.controller('InsideCtrl', function ($scope, ngDialog) {
      $scope.dialogModel = {
        message : 'message from passed scope'
      };
      $scope.openSecond = function () {
        ngDialog.open({
          template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
          plain: true,
          closeByEscape: false,
          controller: 'SecondModalCtrl'
        });
      };
    });

