app.controller("mainController",["$scope","$routeParams","$location","vendorsAPI","$http",function(o,n,e,r,a){var t="data/vendors.json";o.vendorList=[],o.categories=[],o.states=[],o.vendor=[],a.get(t,{cache:!0}).success(function(e){o.vendorList=e,angular.forEach(o.vendorList,function(e){e.name==n.name&&(o.vendor=e)}),angular.forEach(o.vendorList,function(n){angular.forEach(n.categories,function(n){var e=!1;angular.forEach(o.categories,function(o){o==n&&(e=!0)}),e===!1&&o.categories.push(n)})})})}]),app.controller("menu",["$scope","$location",function(o,n){o.location=n}]),app.controller("vendorCtrl",["$scope","$routeParams",function(o,n){o.vendor={name:n.name}}]),app.controller("imagesCtrl",["$scope",function(){var o=require("folder-contents"),n={path:"/data",recursively:"true"},e=o(n);console.log(e)}]);