'use strict';

angular.module('angularDemoApp')
  .service('todoService', function () {
    var todos = [];
    return {
      add: function(name) {
        todos.push({name: name, done: false});
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
            todo.done = true;
          }
        });
      },
      completeAll: function() {
        this.todoItems().forEach(function(todo) {
          todo.done = true;
        });
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
            console.log(todo)
            todos.splice(i, 1);
            break;
          }
        }
      }
    };
  });
