'use strict';

/**
 * @ngdoc overview
 * @name sheryApp
 * @description
 * # sheryApp
 *
 * Main module of the application.
 */
angular
  .module('sheryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/item_list.html',
        controller: 'ItemListCtrl',
        controllerAs: 'item_list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
