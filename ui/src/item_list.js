let app = angular.module('sheryApp');

/**
 * @ngdoc function
 * @name sheryApp.controller:ItemListCtrl
 * @description
 * # ItemListCtrl
 * fetch and listing item data
 */

let genres = [
    { id: "553133", name: "ウェットフード", fa: "cutlery" },
    { id: "553131", name: "ガム", fa: "medkit"},
    { id: "553131", name: "ドライフード"},
    { id: "206135", name: "おやつ", fa: "heart-o"}
    // 'サプリ',
    // '水',
    // 'ミルク',
    // '離乳食',
    // 'その他'
];

app.controller('ItemListCtrl', ['$scope', '$http', ($scope, $http) => {

    $scope.genres = genres;

    $scope.list = [];
    $scope.page = 0;
    $scope.selectedGenre = null;

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

    $scope.changeGenre = (genre) => {
        $scope.page = 0;
        $scope.selectedGenre = genre;
        $scope.list = [];
        $scope.pushNextItems();
    };

    $scope.queryParameter = () => {
        let ret = { page: $scope.page };
        if ($scope.selectedGenre) {
            ret.genres__id = $scope.selectedGenre.id
        }
        return ret;
    };
}]);

