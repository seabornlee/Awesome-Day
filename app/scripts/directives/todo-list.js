'use strict';

angular.module('angularDemoApp')
.directive('todoList', function () {
  return {
    templateUrl: 'views/todo-list.html',
    restrict: 'E',
    controller: function($scope, todoService, hotkeys) {
      $scope.todos = function() {
        return todoService.todoItems();
      };

      var isItemOrderVisible = false;
      $scope.isItemOrderVisible = function() {
        return isItemOrderVisible;
      };
      $scope.toggleItemOrderVisibility = function() {
        isItemOrderVisible = !isItemOrderVisible;
      };

      $scope.showItemOrder = function() {
        isItemOrderVisible = true;
      };

      $scope.hideItemOrder = function() {
        isItemOrderVisible = false;
      };

      var bindShowItemOrderShortcut = function() {
        hotkeys.add({
          combo: 'ctrl',
          action: 'keydown',
          allowIn: ['INPUT'],
          description: 'Show item order',
          callback: function() {
            $scope.showItemOrder();
            bindHideItemOrderShortcut();
          }
        });
      };
      var bindHideItemOrderShortcut = function() {
        hotkeys.del('ctrl');
        hotkeys.add({
          combo: 'ctrl',
          action: 'keyup',
          allowIn: ['INPUT'],
          description: 'Hide item order',
          callback: function() {
            $scope.hideItemOrder();
            bindShowItemOrderShortcut();
          }
        });
      };
      bindShowItemOrderShortcut();
    }
  };
});
