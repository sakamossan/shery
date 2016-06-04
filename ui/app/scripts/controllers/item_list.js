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

    $scope.page = 0;
    $scope.list = [];

    $scope.pushNextItems = function () {
      $scope.page++;
      return $http({
        method: 'GET',
        url: '/rakuten/item/',
        params: { page: $scope.page }
      }).success(function (data) {
        $scope.list = $scope.list.concat(data);
      }).error(function(data, status, header) { console.log(data, status, header); });
    }
}]);
