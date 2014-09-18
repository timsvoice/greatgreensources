app.factory("vendorsService", function($q, $http) {

  var vendorsUrl = '/vendors/data';
  var vendorsService = {};
  
  vendorsService.getData = function() {
    return $http.get(vendorsUrl).success(function(data){
      console.log(data);
    });
  };
  
  return vendorsService;
});