'use strict';

/**
 * @ngdoc overview
 * @name sheryApp
 * @description
 * # sheryApp
 *
 * Main module of the application.
 */

let app = angular.module('sheryApp', ['ngRoute']);

//app.config(function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: '/static/item_list.html',
//            controller: 'ItemListCtrl',
//            controllerAs: 'item_list'
//        })
//        .otherwise({
//            redirectTo: '/'
//        });
//});

require('./item_list');