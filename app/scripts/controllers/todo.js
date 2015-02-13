'use strict';

angular.module('angularDemoApp')
  .controller('TodoCtrl', function (hotkeys) {
    hotkeys.add({
      combo: 'ctrl+n',
      description: 'Add new item',
      callback: function() {
        document.getElementById('todoName').focus();
      }
    });
  });
