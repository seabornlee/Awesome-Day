'use strict';

/**
 * @ngdoc service
 * @name angularDemoApp.shortcutService
 * @description
 * # shortcutService
 * Service in the angularDemoApp.
 */
angular.module('angularDemoApp')
  .service('shortcutService', function (hotkeys, todoService) {
    var isItemOrderVisible = false;

    var combo = 'ctrl';
    hotkeys.add({
      combo: combo,
      action: 'keydown',
      description: 'Show/Hide item order',
      allowIn: ['INPUT'],
      callback: function() {
        isItemOrderVisible = true;
      }
    });

    hotkeys.add({
      combo: combo,
      action: 'keyup',
      allowIn: ['INPUT'],
      callback: function() {
        isItemOrderVisible = false;
      }
    });

    hotkeys.add({
      combo: 'ctrl+n',
      description: 'Add new item',
      callback: function() {
        document.getElementById('todoName').focus();
      }
    });

    var unregisterHotkeys = function(length) {
      for (var i=1; i<=length; i++) {
        hotkeys.del('ctrl+' + i);
      }
    };

    var registerHotkeys = function(length) {
      for (var i=1; i<=length; i++) {
        hotkeys.add({
          combo: 'ctrl+' + i,
          action: 'keydown',
          allowIn: ['INPUT'],
          description: 'Complete todo item at position ' + i,
          callback: function(event, hotkey) {
            var index = parseInt(hotkey.combo[0].split('+')[1], 10) - 1;
            todoService.completeTodoAt(index);
          }
        });
      }
    };

    return {
      isItemOrderVisible: function() {
        return isItemOrderVisible;
      },
      showCheatSheet: function() {
        hotkeys.toggleCheatSheet();
      },
      updateTodoListShortcuts: function(newLength, oldLength) {
        unregisterHotkeys(oldLength);
        registerHotkeys(newLength);
      }
    };
  });
