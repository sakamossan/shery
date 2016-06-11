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

var genres = [{ id: "553133", name: "ウェットフード", fa: "cutlery" }, { id: "553131", name: "ガム", fa: "medkit" }, { id: "553131", name: "ドライフード" }, { id: "206135", name: "おやつ", fa: "heart-o" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaXRlbV9saXN0LmpzIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVY7Ozs7Ozs7Ozs7QUFVQSxJQUFJLFNBQVMsQ0FDVCxFQUFFLElBQUksUUFBTixFQUFnQixNQUFNLFNBQXRCLEVBQWlDLElBQUksU0FBckMsRUFEUyxFQUVULEVBQUUsSUFBSSxRQUFOLEVBQWdCLE1BQU0sSUFBdEIsRUFBNEIsSUFBSSxRQUFoQyxFQUZTLEVBR1QsRUFBRSxJQUFJLFFBQU4sRUFBZ0IsTUFBTSxRQUF0QixFQUhTLEVBSVQsRUFBRSxJQUFJLFFBQU4sRUFBZ0IsTUFBTSxLQUF0QixFQUE2QixJQUFJLFNBQWpDOzs7Ozs7QUFKUyxDQUFiOztBQVlBLElBQUksVUFBSixDQUFlLGNBQWYsRUFBK0IsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1COztBQUVsRSxXQUFPLE1BQVAsR0FBZ0IsTUFBaEI7O0FBRUEsV0FBTyxJQUFQLEdBQWMsRUFBZDtBQUNBLFdBQU8sSUFBUCxHQUFjLENBQWQ7QUFDQSxXQUFPLGFBQVAsR0FBdUIsSUFBdkI7O0FBRUEsV0FBTyxhQUFQLEdBQXVCLFlBQU07QUFDekIsZUFBTyxJQUFQO0FBQ0EsZUFBTyxNQUFNO0FBQ1Qsb0JBQVEsS0FEQztBQUVULGlCQUFLLGdCQUZJO0FBR1Qsb0JBQVEsT0FBTyxjQUFQO0FBSEMsU0FBTixFQUlKLE9BSkksQ0FJSSxVQUFDLElBQUQsRUFBVTtBQUNqQixtQkFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBQVksTUFBWixDQUFtQixJQUFuQixDQUFkO0FBQ0gsU0FOTSxFQU1KLEtBTkksQ0FNRSxVQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsTUFBZjtBQUFBLG1CQUEwQixRQUFRLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLENBQTFCO0FBQUEsU0FORixDQUFQO0FBT0gsS0FURDs7QUFXQSxXQUFPLFdBQVAsR0FBcUIsVUFBQyxLQUFELEVBQVc7QUFDNUIsZUFBTyxJQUFQLEdBQWMsQ0FBZDtBQUNBLGVBQU8sYUFBUCxHQUF1QixLQUF2QjtBQUNBLGVBQU8sSUFBUCxHQUFjLEVBQWQ7QUFDQSxlQUFPLGFBQVA7QUFDSCxLQUxEOztBQU9BLFdBQU8sY0FBUCxHQUF3QixZQUFNO0FBQzFCLFlBQUksTUFBTSxFQUFFLE1BQU0sT0FBTyxJQUFmLEVBQVY7QUFDQSxZQUFJLE9BQU8sYUFBWCxFQUEwQjtBQUN0QixnQkFBSSxVQUFKLEdBQWlCLE9BQU8sYUFBUCxDQUFxQixFQUF0QztBQUNIO0FBQ0QsZUFBTyxHQUFQO0FBQ0gsS0FORDtBQU9ILENBakM4QixDQUEvQjs7O0FDdEJBOzs7Ozs7Ozs7OztBQVdBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQUMsU0FBRCxDQUEzQixDQUFWOztBQUVBLElBQUksTUFBSixDQUFXLFVBQVUsY0FBVixFQUEwQjtBQUNqQyxtQkFDSyxJQURMLENBQ1UsR0FEVixFQUNlO0FBQ1AscUJBQWEsd0JBRE47QUFFUCxvQkFBWSxjQUZMO0FBR1Asc0JBQWM7QUFIUCxLQURmLEVBTUssU0FOTCxDQU1lO0FBQ1Asb0JBQVk7QUFETCxLQU5mO0FBU0gsQ0FWRDs7QUFZQSxRQUFRLGFBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaGVyeUFwcCcpO1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgc2hlcnlBcHAuY29udHJvbGxlcjpJdGVtTGlzdEN0cmxcbiAqIEBkZXNjcmlwdGlvblxuICogIyBJdGVtTGlzdEN0cmxcbiAqIGZldGNoIGFuZCBsaXN0aW5nIGl0ZW0gZGF0YVxuICovXG5cbmxldCBnZW5yZXMgPSBbXG4gICAgeyBpZDogXCI1NTMxMzNcIiwgbmFtZTogXCLjgqbjgqfjg4Pjg4jjg5Xjg7zjg4lcIiwgZmE6IFwiY3V0bGVyeVwiIH0sXG4gICAgeyBpZDogXCI1NTMxMzFcIiwgbmFtZTogXCLjgqzjg6BcIiwgZmE6IFwibWVka2l0XCJ9LFxuICAgIHsgaWQ6IFwiNTUzMTMxXCIsIG5hbWU6IFwi44OJ44Op44Kk44OV44O844OJXCJ9LFxuICAgIHsgaWQ6IFwiMjA2MTM1XCIsIG5hbWU6IFwi44GK44KE44GkXCIsIGZhOiBcImhlYXJ0LW9cIn1cbiAgICAvLyAn44K144OX44OqJyxcbiAgICAvLyAn5rC0JyxcbiAgICAvLyAn44Of44Or44KvJyxcbiAgICAvLyAn6Zui5Lmz6aOfJyxcbiAgICAvLyAn44Gd44Gu5LuWJ1xuXTtcblxuYXBwLmNvbnRyb2xsZXIoJ0l0ZW1MaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRodHRwJywgKCRzY29wZSwgJGh0dHApID0+IHtcblxuICAgICRzY29wZS5nZW5yZXMgPSBnZW5yZXM7XG5cbiAgICAkc2NvcGUubGlzdCA9IFtdO1xuICAgICRzY29wZS5wYWdlID0gMDtcbiAgICAkc2NvcGUuc2VsZWN0ZWRHZW5yZSA9IG51bGw7XG5cbiAgICAkc2NvcGUucHVzaE5leHRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgJHNjb3BlLnBhZ2UrKztcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICcvcmFrdXRlbi9pdGVtLycsXG4gICAgICAgICAgICBwYXJhbXM6ICRzY29wZS5xdWVyeVBhcmFtZXRlcigpXG4gICAgICAgIH0pLnN1Y2Nlc3MoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICRzY29wZS5saXN0ID0gJHNjb3BlLmxpc3QuY29uY2F0KGRhdGEpO1xuICAgICAgICB9KS5lcnJvcigoZGF0YSwgc3RhdHVzLCBoZWFkZXIpID0+IGNvbnNvbGUubG9nKGRhdGEsIHN0YXR1cywgaGVhZGVyKSlcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZUdlbnJlID0gKGdlbnJlKSA9PiB7XG4gICAgICAgICRzY29wZS5wYWdlID0gMDtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkR2VucmUgPSBnZW5yZTtcbiAgICAgICAgJHNjb3BlLmxpc3QgPSBbXTtcbiAgICAgICAgJHNjb3BlLnB1c2hOZXh0SXRlbXMoKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnF1ZXJ5UGFyYW1ldGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmV0ID0geyBwYWdlOiAkc2NvcGUucGFnZSB9O1xuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkR2VucmUpIHtcbiAgICAgICAgICAgIHJldC5nZW5yZXNfX2lkID0gJHNjb3BlLnNlbGVjdGVkR2VucmUuaWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59XSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIHNoZXJ5QXBwXG4gKiBAZGVzY3JpcHRpb25cbiAqICMgc2hlcnlBcHBcbiAqXG4gKiBNYWluIG1vZHVsZSBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cblxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaGVyeUFwcCcsIFsnbmdSb3V0ZSddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL3N0YXRpYy9pdGVtX2xpc3QuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSXRlbUxpc3RDdHJsJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2l0ZW1fbGlzdCdcbiAgICAgICAgfSlcbiAgICAgICAgLm90aGVyd2lzZSh7XG4gICAgICAgICAgICByZWRpcmVjdFRvOiAnLydcbiAgICAgICAgfSk7XG59KTtcblxucmVxdWlyZSgnLi9pdGVtX2xpc3QnKTsiXX0=
