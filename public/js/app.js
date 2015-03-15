(function() {
  'use strict';

  angular
    .module('bumaApp', [])
    .controller('mainCtrl', function($scope) {
      $scope.hello = "Hello World!";
    });
})();
