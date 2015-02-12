'use strict';

angular.module('angularDemoApp')
  .directive('todoList', function () {
    return {
      templateUrl: 'views/todo-list.html',
      restrict: 'E',
      controller: function($scope, todoService) {
        $scope.todos = function() {
          return todoService.todoItems();
        };

        var now = new Date();
        var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        $scope.countdown = (tomorrow - now) / 1000;
      }
    };
  });
