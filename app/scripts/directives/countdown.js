'use strict';

/**
 * @ngdoc directive
 * @name angularDemoApp.directive:countdown
 * @description
 * # countdown
 */
angular.module('angularDemoApp')
  .directive('countdown', function () {
    return {
      templateUrl: 'views/countdown.html',
      restrict: 'E',
      controller: function($scope) {
        var now = new Date();
        var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        $scope.countdown = (tomorrow - now) / 1000;
      }
    };
  });
