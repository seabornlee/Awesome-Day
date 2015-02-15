'use strict';

/**
 * @ngdoc service
 * @name angularDemoApp.shortcutService
 * @description
 * # shortcutService
 * Service in the angularDemoApp.
 */
angular.module('angularDemoApp')
  .service('shortcutService', function (hotkeys) {
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

    return {
      isItemOrderVisible: function() {
        return isItemOrderVisible;
      },
      showCheatSheet: function() {
        hotkeys.toggleCheatSheet();
      }
    };
  });
