'use strict';

angular.module('angularDemoApp')
.directive('todoList', function () {
  return {
    templateUrl: 'views/todo-list.html',
    restrict: 'E',
    controller: function($scope, todoService, shortcutService) {
      $scope.todos = function() {
        return todoService.todoItems();
      };

      $scope.isItemOrderVisible = function() {
        return shortcutService.isItemOrderVisible();
      };

      $scope.$watch('todos().length', function(newLength, oldLength) {
        shortcutService.updateTodoListShortcuts(newLength, oldLength);
      });
    }
  };
});
