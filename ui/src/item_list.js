var app = angular.module('app', ['ngRoute']);

app.controller('ItemListController', ['$scope', '$http', ($scope, $http) => {
    $http({
        method: 'GET',
        url: '/rakuten/item/',
    })
    .success((data) => $scope.list = data)
    .error((data, status, header) => console.log(data, status, header));
}]);
