app.factory("vendorsAPI",function(n){var o="data/vendors.json";return function(c){n.get(o,{cache:!0}).success(function(n){c.push(n),console.log(n)})}});