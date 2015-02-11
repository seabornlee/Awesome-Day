'use strict';

/**
 * @ngdoc service
 * @name angularDemoApp.todoService
 * @description
 * # todoService
 * Service in the angularDemoApp.
 */
angular.module('angularDemoApp')
  .service('todoService', function () {
    var todos = [];
    return {
      add: function(todo) {
        todos.push(todo);
      },
      remainingCount: function() {
        return todos.length;
      },
      todoItems: function() {
        return todos;
      }
    };
  });
