let app = angular.module('sheryApp');

/**
 * @ngdoc function
 * @name sheryApp.controller:ItemListCtrl
 * @description
 * # ItemListCtrl
 * fetch and listing item data
 */

let genres = [
    {"id": "553133", "name": "ウェットフード"},
    {"id": "553131", "name": "ガム"},
    // {"id": "553131", "name": "ドライフード"},
    // 'おやつ',
    // 'サプリ',
    // '水',
    // 'ミルク',
    // '離乳食',
    // 'その他'
    {"id": "206135", "name": "おやつ"}
];

app.controller('ItemListCtrl', ['$scope', '$http', ($scope, $http) => {

    $scope.page = 0;
    $scope.list = [];
    $scope.genres = genres;

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

