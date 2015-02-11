'use strict';

angular.module('angularDemoApp')
  .controller('TodoCtrl', function ($scope, todoService) {
    $scope.remainingCount = function() {
      return todoService.remainingCount();
    };
  });
