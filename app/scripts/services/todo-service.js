'use strict';

angular.module('angularDemoApp')
  .service('todoService', function (localStorageService) {
    var todos = localStorageService.get('todos') || [];

    return {
      saveTodos: function() {
        localStorageService.set('todos', todos);
      },
      add: function(name) {
        todos.push({
          name: name,
          done: false,
          complete: function() {
            this.done = true;
            this.completedAt = new Date();
          }
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
            todo.complete();
          }
        });
        this.saveTodos();
      },
      completeAll: function() {
        this.todoItems().forEach(function(todo) {
          todo.complete();
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
      }
    };
  });
