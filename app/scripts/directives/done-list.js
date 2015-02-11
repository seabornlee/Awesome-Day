'use strict';

angular.module('angularDemoApp')
  .directive('doneList', function () {
    return {
      templateUrl: 'views/done-list.html',
      restrict: 'E',
      controller: function($scope, todoService) {
        $scope.doneItems = function() {
          return todoService.doneItems();
        };
      }
    };
  });
