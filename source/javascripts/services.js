app.factory('vendorsAPI', function ($http) {
  
  var url = "data/vendors.json";
  
  var vendorsAPI = {};

  vendorsAPI.getData = function() {
    return $http.get(url).success(function(data){
      console.log("success");
    }).error(function(error) {
      console.log("fail");
    });
  };
  
  return vendorsAPI;

});