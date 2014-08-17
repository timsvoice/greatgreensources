app.factory('vendorsAPI', function ($http) {
  var vendorsUrl = "data/vendors.json";
  var vendors = [];
  return function(vendors) {
  $http.get(vendorsUrl, {
      cache: true
    }).
    success(function(data){
      vendors.push(data);
      console.log(data);
    });
  };
});
