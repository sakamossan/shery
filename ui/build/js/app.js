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

},{"./item_list":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaXRlbV9saXN0LmpzIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVY7Ozs7Ozs7Ozs7QUFVQSxJQUFJLFNBQVMsQ0FDVCxFQUFFLElBQUksUUFBTixFQUFnQixNQUFNLFNBQXRCLEVBQWlDLElBQUksU0FBckMsRUFEUyxFQUVULEVBQUUsSUFBSSxRQUFOLEVBQWdCLE1BQU0sSUFBdEIsRUFBNEIsSUFBSSxRQUFoQyxFQUZTLEVBR1QsRUFBRSxJQUFJLFFBQU4sRUFBZ0IsTUFBTSxRQUF0QixFQUhTLEVBSVQsRUFBRSxJQUFJLFFBQU4sRUFBZ0IsTUFBTSxLQUF0QixFQUE2QixJQUFJLFNBQWpDOzs7Ozs7QUFKUyxDQUFiOztBQVlBLElBQUksVUFBSixDQUFlLGNBQWYsRUFBK0IsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1COztBQUVsRSxXQUFPLE1BQVAsR0FBZ0IsTUFBaEI7O0FBRUEsV0FBTyxJQUFQLEdBQWMsRUFBZDtBQUNBLFdBQU8sSUFBUCxHQUFjLENBQWQ7QUFDQSxXQUFPLGFBQVAsR0FBdUIsSUFBdkI7O0FBRUEsV0FBTyxhQUFQLEdBQXVCLFlBQU07QUFDekIsZUFBTyxJQUFQO0FBQ0EsZUFBTyxNQUFNO0FBQ1Qsb0JBQVEsS0FEQztBQUVULGlCQUFLLGdCQUZJO0FBR1Qsb0JBQVEsT0FBTyxjQUFQO0FBSEMsU0FBTixFQUlKLE9BSkksQ0FJSSxVQUFDLElBQUQsRUFBVTtBQUNqQixtQkFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBQVksTUFBWixDQUFtQixJQUFuQixDQUFkO0FBQ0gsU0FOTSxFQU1KLEtBTkksQ0FNRSxVQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsTUFBZjtBQUFBLG1CQUEwQixRQUFRLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLENBQTFCO0FBQUEsU0FORixDQUFQO0FBT0gsS0FURDs7QUFXQSxXQUFPLFdBQVAsR0FBcUIsVUFBQyxLQUFELEVBQVc7QUFDNUIsZUFBTyxJQUFQLEdBQWMsQ0FBZDtBQUNBLGVBQU8sYUFBUCxHQUF1QixLQUF2QjtBQUNBLGVBQU8sSUFBUCxHQUFjLEVBQWQ7QUFDQSxlQUFPLGFBQVA7QUFDSCxLQUxEOztBQU9BLFdBQU8sY0FBUCxHQUF3QixZQUFNO0FBQzFCLFlBQUksTUFBTSxFQUFFLE1BQU0sT0FBTyxJQUFmLEVBQVY7QUFDQSxZQUFJLE9BQU8sYUFBWCxFQUEwQjtBQUN0QixnQkFBSSxVQUFKLEdBQWlCLE9BQU8sYUFBUCxDQUFxQixFQUF0QztBQUNIO0FBQ0QsZUFBTyxHQUFQO0FBQ0gsS0FORDtBQU9ILENBakM4QixDQUEvQjs7O0FDdEJBOzs7Ozs7Ozs7OztBQVdBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQUMsU0FBRCxDQUEzQixDQUFWOzs7Ozs7Ozs7Ozs7OztBQWNBLFFBQVEsYUFBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3NoZXJ5QXBwJyk7XG5cbi8qKlxuICogQG5nZG9jIGZ1bmN0aW9uXG4gKiBAbmFtZSBzaGVyeUFwcC5jb250cm9sbGVyOkl0ZW1MaXN0Q3RybFxuICogQGRlc2NyaXB0aW9uXG4gKiAjIEl0ZW1MaXN0Q3RybFxuICogZmV0Y2ggYW5kIGxpc3RpbmcgaXRlbSBkYXRhXG4gKi9cblxubGV0IGdlbnJlcyA9IFtcbiAgICB7IGlkOiBcIjU1MzEzM1wiLCBuYW1lOiBcIuOCpuOCp+ODg+ODiOODleODvOODiVwiLCBmYTogXCJjdXRsZXJ5XCIgfSxcbiAgICB7IGlkOiBcIjU1MzEzMVwiLCBuYW1lOiBcIuOCrOODoFwiLCBmYTogXCJtZWRraXRcIn0sXG4gICAgeyBpZDogXCI1NTMxMzFcIiwgbmFtZTogXCLjg4njg6njgqTjg5Xjg7zjg4lcIn0sXG4gICAgeyBpZDogXCIyMDYxMzVcIiwgbmFtZTogXCLjgYrjgoTjgaRcIiwgZmE6IFwiaGVhcnQtb1wifVxuICAgIC8vICfjgrXjg5fjg6onLFxuICAgIC8vICfmsLQnLFxuICAgIC8vICfjg5/jg6vjgq8nLFxuICAgIC8vICfpm6LkubPpo58nLFxuICAgIC8vICfjgZ3jga7ku5YnXG5dO1xuXG5hcHAuY29udHJvbGxlcignSXRlbUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGh0dHAnLCAoJHNjb3BlLCAkaHR0cCkgPT4ge1xuXG4gICAgJHNjb3BlLmdlbnJlcyA9IGdlbnJlcztcblxuICAgICRzY29wZS5saXN0ID0gW107XG4gICAgJHNjb3BlLnBhZ2UgPSAwO1xuICAgICRzY29wZS5zZWxlY3RlZEdlbnJlID0gbnVsbDtcblxuICAgICRzY29wZS5wdXNoTmV4dEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAkc2NvcGUucGFnZSsrO1xuICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJy9yYWt1dGVuL2l0ZW0vJyxcbiAgICAgICAgICAgIHBhcmFtczogJHNjb3BlLnF1ZXJ5UGFyYW1ldGVyKClcbiAgICAgICAgfSkuc3VjY2VzcygoZGF0YSkgPT4ge1xuICAgICAgICAgICAgJHNjb3BlLmxpc3QgPSAkc2NvcGUubGlzdC5jb25jYXQoZGF0YSk7XG4gICAgICAgIH0pLmVycm9yKChkYXRhLCBzdGF0dXMsIGhlYWRlcikgPT4gY29uc29sZS5sb2coZGF0YSwgc3RhdHVzLCBoZWFkZXIpKVxuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlR2VucmUgPSAoZ2VucmUpID0+IHtcbiAgICAgICAgJHNjb3BlLnBhZ2UgPSAwO1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRHZW5yZSA9IGdlbnJlO1xuICAgICAgICAkc2NvcGUubGlzdCA9IFtdO1xuICAgICAgICAkc2NvcGUucHVzaE5leHRJdGVtcygpO1xuICAgIH07XG5cbiAgICAkc2NvcGUucXVlcnlQYXJhbWV0ZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXQgPSB7IHBhZ2U6ICRzY29wZS5wYWdlIH07XG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRHZW5yZSkge1xuICAgICAgICAgICAgcmV0LmdlbnJlc19faWQgPSAkc2NvcGUuc2VsZWN0ZWRHZW5yZS5pZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn1dKTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgc2hlcnlBcHBcbiAqIEBkZXNjcmlwdGlvblxuICogIyBzaGVyeUFwcFxuICpcbiAqIE1haW4gbW9kdWxlIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuXG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3NoZXJ5QXBwJywgWyduZ1JvdXRlJ10pO1xuXG4vL2FwcC5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4vLyAgICAkcm91dGVQcm92aWRlclxuLy8gICAgICAgIC53aGVuKCcvJywge1xuLy8gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9zdGF0aWMvaXRlbV9saXN0Lmh0bWwnLFxuLy8gICAgICAgICAgICBjb250cm9sbGVyOiAnSXRlbUxpc3RDdHJsJyxcbi8vICAgICAgICAgICAgY29udHJvbGxlckFzOiAnaXRlbV9saXN0J1xuLy8gICAgICAgIH0pXG4vLyAgICAgICAgLm90aGVyd2lzZSh7XG4vLyAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvJ1xuLy8gICAgICAgIH0pO1xuLy99KTtcblxucmVxdWlyZSgnLi9pdGVtX2xpc3QnKTsiXX0=
