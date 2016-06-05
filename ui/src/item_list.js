let app = angular.module('sheryApp');

/**
 * @ngdoc function
 * @name sheryApp.controller:ItemListCtrl
 * @description
 * # ItemListCtrl
 * fetch and listing item data
 */
app.controller('ItemListCtrl', ['$scope', '$http', ($scope, $http) => {

    $scope.page = 0;
    $scope.list = [];

    $scope.pushNextItems = () => {
        $scope.page++;
        return $http({
            method: 'GET',
            url: '/rakuten/item/',
            params: $scope.queryParameter()
        }).success((data) => {
            $scope.list = $scope.list.concat(data);
        }).error((data, status, header) => console.log(data, status, header))
    };

    $scope.queryParameter = () => {
        return {
            page: $scope.page
        }
    };
}]);

