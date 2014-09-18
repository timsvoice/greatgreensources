app.factory("VendorResource", function($q, $resource) {
  return $resource('/vendors');
});