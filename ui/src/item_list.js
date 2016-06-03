var app = angular.module('app', []);

app.controller('ItemListController', ['$scope', ($scope) => {
    $scope.list = [
        {'name': 'aaa'},
        {'name': 'bbb'}
    ];
}])