'use strict';

/**
 * @ngdoc overview
 * @name angularDemoApp
 * @description
 * # angularDemoApp
 *
 * Main module of the application.
 */
angular
  .module('angularDemoApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.sortable',
    'xeditable',
    'timer',
    'LocalStorageModule',
    'cfp.hotkeys'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  });
