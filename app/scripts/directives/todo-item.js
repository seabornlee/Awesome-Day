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
      controller: function($scope, todoService, hotkeys) {
        $scope.complete = function() {
          todoService.complete($scope.todo.name);
        };
        $scope.remove = function() {
          todoService.removeDoneItem($scope.todo.name);
        };
        $scope.updateTodo = function() {
          todoService.saveTodos();
        };

        if ($scope.order) {
          hotkeys.add({
            combo: 'ctrl+' + $scope.order,
            action: 'keydown',
            description: 'Complete todo item at position ' + $scope.order,
            callback: function() {
              $scope.complete();
            }
          });
        }
      }
    };
  });
