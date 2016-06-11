(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var app = angular.module('sheryApp');

/**
 * @ngdoc function
 * @name sheryApp.controller:ItemListCtrl
 * @description
 * # ItemListCtrl
 * fetch and listing item data
 */

var genres = [{ id: "553131", name: "ドライフード" }, { id: "553133", name: "ウェットフード", fa: "cutlery" }, { id: "553131", name: "ガム", fa: "medkit" }, { id: "206135", name: "おやつ", fa: "heart-o" }
// 'サプリ',
// '水',
// 'ミルク',
// '離乳食',
// 'その他'

];

app.controller('ItemListCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.genres = genres;

    $scope.list = [];
    $scope.page = 0;
    $scope.selectedGenre = null;

    $scope.pushNextItems = function () {
        $scope.page++;
        return $http({
            method: 'GET',
            url: '/rakuten/item/',
            params: $scope.queryParameter()
        }).success(function (data) {
            $scope.list = $scope.list.concat(data);
        }).error(function (data, status, header) {
            return console.log(data, status, header);
        });
    };

    $scope.changeGenre = function (genre) {
        $scope.page = 0;
        $scope.selectedGenre = genre;
        $scope.list = [];
        $scope.pushNextItems();
    };

    $scope.queryParameter = function () {
        var ret = { page: $scope.page };
        if ($scope.selectedGenre) {
            ret.genres__id = $scope.selectedGenre.id;
        }
        return ret;
    };
}]);

},{}],2:[function(require,module,exports){
'use strict';

/**
 * @ngdoc overview
 * @name sheryApp
 * @description
 * # sheryApp
 *
 * Main module of the application.
 */

var app = angular.module('sheryApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/static/item_list.html',
        controller: 'ItemListCtrl',
        controllerAs: 'item_list'
    }).otherwise({
        redirectTo: '/'
    });
});

require('./item_list');

},{"./item_list":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaXRlbV9saXN0LmpzIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVY7Ozs7Ozs7Ozs7QUFVQSxJQUFJLFNBQVMsQ0FDVCxFQUFFLElBQUksUUFBTixFQUFnQixNQUFNLFFBQXRCLEVBRFMsRUFFVCxFQUFFLElBQUksUUFBTixFQUFnQixNQUFNLFNBQXRCLEVBQWlDLElBQUksU0FBckMsRUFGUyxFQUdULEVBQUUsSUFBSSxRQUFOLEVBQWdCLE1BQU0sSUFBdEIsRUFBNEIsSUFBSSxRQUFoQyxFQUhTLEVBSVQsRUFBRSxJQUFJLFFBQU4sRUFBZ0IsTUFBTSxLQUF0QixFQUE2QixJQUFJLFNBQWpDOzs7Ozs7O0FBSlMsQ0FBYjs7QUFhQSxJQUFJLFVBQUosQ0FBZSxjQUFmLEVBQStCLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjs7QUFFbEUsV0FBTyxNQUFQLEdBQWdCLE1BQWhCOztBQUVBLFdBQU8sSUFBUCxHQUFjLEVBQWQ7QUFDQSxXQUFPLElBQVAsR0FBYyxDQUFkO0FBQ0EsV0FBTyxhQUFQLEdBQXVCLElBQXZCOztBQUVBLFdBQU8sYUFBUCxHQUF1QixZQUFNO0FBQ3pCLGVBQU8sSUFBUDtBQUNBLGVBQU8sTUFBTTtBQUNULG9CQUFRLEtBREM7QUFFVCxpQkFBSyxnQkFGSTtBQUdULG9CQUFRLE9BQU8sY0FBUDtBQUhDLFNBQU4sRUFJSixPQUpJLENBSUksVUFBQyxJQUFELEVBQVU7QUFDakIsbUJBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxDQUFZLE1BQVosQ0FBbUIsSUFBbkIsQ0FBZDtBQUNILFNBTk0sRUFNSixLQU5JLENBTUUsVUFBQyxJQUFELEVBQU8sTUFBUCxFQUFlLE1BQWY7QUFBQSxtQkFBMEIsUUFBUSxHQUFSLENBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQixNQUExQixDQUExQjtBQUFBLFNBTkYsQ0FBUDtBQU9ILEtBVEQ7O0FBV0EsV0FBTyxXQUFQLEdBQXFCLFVBQUMsS0FBRCxFQUFXO0FBQzVCLGVBQU8sSUFBUCxHQUFjLENBQWQ7QUFDQSxlQUFPLGFBQVAsR0FBdUIsS0FBdkI7QUFDQSxlQUFPLElBQVAsR0FBYyxFQUFkO0FBQ0EsZUFBTyxhQUFQO0FBQ0gsS0FMRDs7QUFPQSxXQUFPLGNBQVAsR0FBd0IsWUFBTTtBQUMxQixZQUFJLE1BQU0sRUFBRSxNQUFNLE9BQU8sSUFBZixFQUFWO0FBQ0EsWUFBSSxPQUFPLGFBQVgsRUFBMEI7QUFDdEIsZ0JBQUksVUFBSixHQUFpQixPQUFPLGFBQVAsQ0FBcUIsRUFBdEM7QUFDSDtBQUNELGVBQU8sR0FBUDtBQUNILEtBTkQ7QUFPSCxDQWpDOEIsQ0FBL0I7OztBQ3ZCQTs7Ozs7Ozs7Ozs7QUFXQSxJQUFJLE1BQU0sUUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixDQUFDLFNBQUQsQ0FBM0IsQ0FBVjs7QUFFQSxJQUFJLE1BQUosQ0FBVyxVQUFVLGNBQVYsRUFBMEI7QUFDakMsbUJBQ0ssSUFETCxDQUNVLEdBRFYsRUFDZTtBQUNQLHFCQUFhLHdCQUROO0FBRVAsb0JBQVksY0FGTDtBQUdQLHNCQUFjO0FBSFAsS0FEZixFQU1LLFNBTkwsQ0FNZTtBQUNQLG9CQUFZO0FBREwsS0FOZjtBQVNILENBVkQ7O0FBWUEsUUFBUSxhQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc2hlcnlBcHAnKTtcblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHNoZXJ5QXBwLmNvbnRyb2xsZXI6SXRlbUxpc3RDdHJsXG4gKiBAZGVzY3JpcHRpb25cbiAqICMgSXRlbUxpc3RDdHJsXG4gKiBmZXRjaCBhbmQgbGlzdGluZyBpdGVtIGRhdGFcbiAqL1xuXG5sZXQgZ2VucmVzID0gW1xuICAgIHsgaWQ6IFwiNTUzMTMxXCIsIG5hbWU6IFwi44OJ44Op44Kk44OV44O844OJXCJ9LFxuICAgIHsgaWQ6IFwiNTUzMTMzXCIsIG5hbWU6IFwi44Km44Kn44OD44OI44OV44O844OJXCIsIGZhOiBcImN1dGxlcnlcIiB9LFxuICAgIHsgaWQ6IFwiNTUzMTMxXCIsIG5hbWU6IFwi44Ks44OgXCIsIGZhOiBcIm1lZGtpdFwifSxcbiAgICB7IGlkOiBcIjIwNjEzNVwiLCBuYW1lOiBcIuOBiuOChOOBpFwiLCBmYTogXCJoZWFydC1vXCJ9XG4gICAgLy8gJ+OCteODl+ODqicsXG4gICAgLy8gJ+awtCcsXG4gICAgLy8gJ+ODn+ODq+OCrycsXG4gICAgLy8gJ+mbouS5s+mjnycsXG4gICAgLy8gJ+OBneOBruS7lidcblxuXTtcblxuYXBwLmNvbnRyb2xsZXIoJ0l0ZW1MaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRodHRwJywgKCRzY29wZSwgJGh0dHApID0+IHtcblxuICAgICRzY29wZS5nZW5yZXMgPSBnZW5yZXM7XG5cbiAgICAkc2NvcGUubGlzdCA9IFtdO1xuICAgICRzY29wZS5wYWdlID0gMDtcbiAgICAkc2NvcGUuc2VsZWN0ZWRHZW5yZSA9IG51bGw7XG5cbiAgICAkc2NvcGUucHVzaE5leHRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgJHNjb3BlLnBhZ2UrKztcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICcvcmFrdXRlbi9pdGVtLycsXG4gICAgICAgICAgICBwYXJhbXM6ICRzY29wZS5xdWVyeVBhcmFtZXRlcigpXG4gICAgICAgIH0pLnN1Y2Nlc3MoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICRzY29wZS5saXN0ID0gJHNjb3BlLmxpc3QuY29uY2F0KGRhdGEpO1xuICAgICAgICB9KS5lcnJvcigoZGF0YSwgc3RhdHVzLCBoZWFkZXIpID0+IGNvbnNvbGUubG9nKGRhdGEsIHN0YXR1cywgaGVhZGVyKSlcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZUdlbnJlID0gKGdlbnJlKSA9PiB7XG4gICAgICAgICRzY29wZS5wYWdlID0gMDtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkR2VucmUgPSBnZW5yZTtcbiAgICAgICAgJHNjb3BlLmxpc3QgPSBbXTtcbiAgICAgICAgJHNjb3BlLnB1c2hOZXh0SXRlbXMoKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnF1ZXJ5UGFyYW1ldGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmV0ID0geyBwYWdlOiAkc2NvcGUucGFnZSB9O1xuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkR2VucmUpIHtcbiAgICAgICAgICAgIHJldC5nZW5yZXNfX2lkID0gJHNjb3BlLnNlbGVjdGVkR2VucmUuaWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59XSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIHNoZXJ5QXBwXG4gKiBAZGVzY3JpcHRpb25cbiAqICMgc2hlcnlBcHBcbiAqXG4gKiBNYWluIG1vZHVsZSBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cblxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaGVyeUFwcCcsIFsnbmdSb3V0ZSddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL3N0YXRpYy9pdGVtX2xpc3QuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSXRlbUxpc3RDdHJsJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2l0ZW1fbGlzdCdcbiAgICAgICAgfSlcbiAgICAgICAgLm90aGVyd2lzZSh7XG4gICAgICAgICAgICByZWRpcmVjdFRvOiAnLydcbiAgICAgICAgfSk7XG59KTtcblxucmVxdWlyZSgnLi9pdGVtX2xpc3QnKTsiXX0=
