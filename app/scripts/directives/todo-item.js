'use strict';

angular.module('angularDemoApp')
  .directive('todoItem', function () {
    return {
      templateUrl: 'views/todo-item.html',
      restrict: 'E',
      replace: true,
      scope: {
        todo: '=',
        order: '=',
        isItemOrderVisible: '='
      },
      controller: function($scope, todoService) {
        $scope.complete = function() {
          todoService.complete($scope.todo.name);
        };
        $scope.remove = function() {
          todoService.removeDoneItem($scope.todo.name);
        };
        $scope.updateTodo = function() {
          todoService.saveTodos();
        };
      }
    };
  });
