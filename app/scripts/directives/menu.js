'use strict';

/**
 * @ngdoc directive
 * @name angularDemoApp.directive:menu
 * @description
 * # menu
 */
angular.module('angularDemoApp')
  .directive('menu', function () {
    return {
      templateUrl: 'views/menu.html',
      restrict: 'E',
      controller: function($scope, todoService, shortcutService) {
        $scope.clear = function() {
          todoService.clear();
        };

        $scope.showCheatSheet = function() {
          shortcutService.showCheatSheet();
        };
      }
    };
  });
