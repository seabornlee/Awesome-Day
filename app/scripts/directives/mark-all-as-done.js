'use strict';

angular.module('angularDemoApp')
  .directive('markAllAsDone', function () {
    return {
      template: '<button id="checkAll" class="btn btn-success" ng-click="completeAll()">Mark all as done</button>',
      restrict: 'E',
      controller: function($scope, todoService) {
        $scope.completeAll = function() {
          todoService.completeAll();
        };
      }
    };
  });
