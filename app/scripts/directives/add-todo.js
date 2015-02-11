'use strict';

angular.module('angularDemoApp')
.directive('addTodo', function () {
  return {
    templateUrl: 'views/add-todo.html',
    restrict: 'E',
    controller: function($scope, todoService) {
      $scope.handleKeypress = function(e) {
        if (e.which == 13) {
          if($scope.todoName != ''){
            todoService.add($scope.todoName);
            $scope.todoName = '';
          }
        }
      };
    }
  };
});
