app.controller('mainController', ['$scope',
  function($scope) {

  $scope.vendors = [];
  $scope.vendorList = [
    {
      vendor: {
        title: "Vendor A",
        category: "Trees"
      }
    },
    {
      vendor: {
        title: "Vendor B",
        category: "Perennials"
      }
    },
    {
      vendor: {
        title: "Vendor C",
        category: "Plants"
      }
    },
    {
      vendor: {
        title: "Vendor D",
        category: "Weeds"
      }
    },
    {
      vendor: {
        title: "Vendor E",
        category: "Flowers"
      }
    },
    {
      vendor: {
        title: "Vendor F",
        category: "Shrubs"
      }
    }
  ];

}]);