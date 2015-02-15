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
    }
  };
});
