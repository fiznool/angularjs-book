'use strict';

var directives = angular.module('guthub.directives', []);

directives.directive('butterbar', ['$rootScope',
  function($rootScope) {
    return {
      link: function(scope, element) {
        element.addClass('hide');

        $rootScope.$on('$routeChangeStart', function() {
          element.removeClass('hide');
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          element.addClass('hide');
        });
      }
    };
}]);

directives.directive('focus',
  function() {
    return {
      link: function(scope, element) {
        element[0].focus();
      }
    };
});