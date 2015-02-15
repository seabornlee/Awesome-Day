'use strict';

angular.module('angularDemoApp')
  .service('todoService', function (localStorageService) {
    var todos = localStorageService.get('todos') || [];

    var complete = function(todo) {
      todo.done = true;
      todo.completedAt = new Date();
    };

    return {
      saveTodos: function() {
        localStorageService.set('todos', todos);
      },
      add: function(name) {
        todos.push({
          name: name,
          done: false
        });
        this.saveTodos();
      },
      remainingCount: function() {
        return this.todoItems().length;
      },
      todoItems: function() {
        return todos.filter(function(todo) {
          return !todo.done;
        });
      },
      complete: function(name) {
        this.todoItems().forEach(function(todo) {
          if (todo.name === name) {
            complete(todo);
          }
        });
        this.saveTodos();
      },
      completeAll: function() {
        this.todoItems().forEach(function(todo) {
          complete(todo);
        });
        this.saveTodos();
      },
      doneItems: function() {
        return todos.filter(function(todo) {
          return todo.done;
        });
      },
      removeDoneItem: function(name) {
        for (var i=0; i<todos.length; i++) {
          var todo = todos[i];
          if (todo.done && todo.name === name) {
            todos.splice(i, 1);
            break;
          }
        }
        this.saveTodos();
      },
      clear: function() {
        todos = [];
        this.saveTodos();
      }
    };
  });
