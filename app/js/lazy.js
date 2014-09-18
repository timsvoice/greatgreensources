 app.directive('lazy', function($timeout) {
    return {
      restrict: 'C',
      link: function (scope, elm) {
        $timeout(function() {
          $(elm).lazyload({
            effect: 'fadeIn',
            effectspeed: 500,
            'skip_invisible': false,
            threshold : 20
          });
        }, 0);
      }
    };
  });