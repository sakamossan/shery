'use strict';

/**
 * @ngdoc function
 * @name sheryApp.controller:ItemListCtrl
 * @description
 * # ItemListCtrl
 * fetch and listing item data
 */
angular.module('sheryApp')
  .controller('ItemListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/rakuten/item/',
    })
    .success(function (data) { $scope.list = data; })
    .error(function(data, status, header) { console.log(data, status, header); });
}]);
