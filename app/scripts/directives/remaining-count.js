'use strict';

/**
 * @ngdoc directive
 * @name angularDemoApp.directive:remainingCount
 * @description
 * # remainingCount
 */
angular.module('angularDemoApp')
  .directive('remainingCount', function () {
    return {
      template: '<strong><span class="count-todos">{{ remainingCount() }}</span></strong> Items Left',
      restrict: 'E',
      controller: function($scope, todoService) {
        $scope.remainingCount = function() {
          return todoService.remainingCount();
        };
      }
    };
  });
