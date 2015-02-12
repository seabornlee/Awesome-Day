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
      }
    };
  });
