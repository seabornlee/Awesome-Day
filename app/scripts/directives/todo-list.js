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
