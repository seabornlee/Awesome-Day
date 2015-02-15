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
      callback: function(event, hotkey) {
        if (event.type === 'keydown') {
          isItemOrderVisible = true;
          hotkey.action = 'keyup';
        } else {
          isItemOrderVisible = false;
          hotkey.action = 'keydown';
        }
        hotkeys.del(hotkey.combo);
        hotkeys.add(hotkey);
      }
    });

    return {
      isItemOrderVisible: function() {
        return isItemOrderVisible;
      }
    };
  });
