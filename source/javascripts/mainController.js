app.controller('mainController', ['$scope', 'vendorsAPI',
  function($scope, vendorsAPI) {

  $scope.vendors = [];

  getData();

    function getData() {
      vendorsAPI.getData()
      .success(function (data) {
        $scope.vendors.push(data);
        console.log($scope.vendors);
      });
    }

}]);