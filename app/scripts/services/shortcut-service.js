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
        var configuration = hotkeys.get(combo);
        if (configuration.action === 'keydown') {
          isItemOrderVisible = true;
          configuration.action = 'keyup';
        } else {
          isItemOrderVisible = false;
          configuration.action = 'keydown';
        }
        hotkeys.del(combo);
        hotkeys.add(configuration);
      }
    });

    return {
      isItemOrderVisible: function() {
        return isItemOrderVisible;
      }
    };
  });
