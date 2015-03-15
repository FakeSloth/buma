(function() {
  'use strict';

  angular
    .module('bumaApp', [])
    .controller('mainCtrl', function($scope) {
      $scope.hello = "OH YEAH";
    })
    .directive('superman', function() {
      return {
        restrict: 'E',
        template: 'Name: {{hello}}'
      };
    });
})();
