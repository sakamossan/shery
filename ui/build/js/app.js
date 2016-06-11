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

var genres = [{ "id": "553133", "name": "ウェットフード" }, { "id": "553131", "name": "ガム" },
// {"id": "553131", "name": "ドライフード"},
// 'おやつ',
// 'サプリ',
// '水',
// 'ミルク',
// '離乳食',
// 'その他'
{ "id": "206135", "name": "おやつ" }];

app.controller('ItemListCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.page = 0;
    $scope.list = [];
    $scope.genres = genres;

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

    $scope.queryParameter = function () {
        return {
            page: $scope.page
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaXRlbV9saXN0LmpzIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVY7Ozs7Ozs7Ozs7QUFVQSxJQUFJLFNBQVMsQ0FDVCxFQUFDLE1BQU0sUUFBUCxFQUFpQixRQUFRLFNBQXpCLEVBRFMsRUFFVCxFQUFDLE1BQU0sUUFBUCxFQUFpQixRQUFRLElBQXpCLEVBRlM7Ozs7Ozs7O0FBVVQsRUFBQyxNQUFNLFFBQVAsRUFBaUIsUUFBUSxLQUF6QixFQVZTLENBQWI7O0FBYUEsSUFBSSxVQUFKLENBQWUsY0FBZixFQUErQixDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBbUI7O0FBRWxFLFdBQU8sSUFBUCxHQUFjLENBQWQ7QUFDQSxXQUFPLElBQVAsR0FBYyxFQUFkO0FBQ0EsV0FBTyxNQUFQLEdBQWdCLE1BQWhCOztBQUVBLFdBQU8sYUFBUCxHQUF1QixZQUFNO0FBQ3pCLGVBQU8sSUFBUDtBQUNBLGVBQU8sTUFBTTtBQUNULG9CQUFRLEtBREM7QUFFVCxpQkFBSyxnQkFGSTtBQUdULG9CQUFRLE9BQU8sY0FBUDtBQUhDLFNBQU4sRUFJSixPQUpJLENBSUksVUFBQyxJQUFELEVBQVU7QUFDakIsbUJBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxDQUFZLE1BQVosQ0FBbUIsSUFBbkIsQ0FBZDtBQUNILFNBTk0sRUFNSixLQU5JLENBTUUsVUFBQyxJQUFELEVBQU8sTUFBUCxFQUFlLE1BQWY7QUFBQSxtQkFBMEIsUUFBUSxHQUFSLENBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQixNQUExQixDQUExQjtBQUFBLFNBTkYsQ0FBUDtBQU9ILEtBVEQ7O0FBV0EsV0FBTyxjQUFQLEdBQXdCLFlBQU07QUFDMUIsZUFBTztBQUNILGtCQUFNLE9BQU87QUFEVixTQUFQO0FBR0gsS0FKRDtBQUtILENBdEI4QixDQUEvQjs7O0FDdkJBOzs7Ozs7Ozs7OztBQVdBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQUMsU0FBRCxDQUEzQixDQUFWOztBQUVBLElBQUksTUFBSixDQUFXLFVBQVUsY0FBVixFQUEwQjtBQUNqQyxtQkFDSyxJQURMLENBQ1UsR0FEVixFQUNlO0FBQ1AscUJBQWEsd0JBRE47QUFFUCxvQkFBWSxjQUZMO0FBR1Asc0JBQWM7QUFIUCxLQURmLEVBTUssU0FOTCxDQU1lO0FBQ1Asb0JBQVk7QUFETCxLQU5mO0FBU0gsQ0FWRDs7QUFZQSxRQUFRLGFBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaGVyeUFwcCcpO1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgc2hlcnlBcHAuY29udHJvbGxlcjpJdGVtTGlzdEN0cmxcbiAqIEBkZXNjcmlwdGlvblxuICogIyBJdGVtTGlzdEN0cmxcbiAqIGZldGNoIGFuZCBsaXN0aW5nIGl0ZW0gZGF0YVxuICovXG5cbmxldCBnZW5yZXMgPSBbXG4gICAge1wiaWRcIjogXCI1NTMxMzNcIiwgXCJuYW1lXCI6IFwi44Km44Kn44OD44OI44OV44O844OJXCJ9LFxuICAgIHtcImlkXCI6IFwiNTUzMTMxXCIsIFwibmFtZVwiOiBcIuOCrOODoFwifSxcbiAgICAvLyB7XCJpZFwiOiBcIjU1MzEzMVwiLCBcIm5hbWVcIjogXCLjg4njg6njgqTjg5Xjg7zjg4lcIn0sXG4gICAgLy8gJ+OBiuOChOOBpCcsXG4gICAgLy8gJ+OCteODl+ODqicsXG4gICAgLy8gJ+awtCcsXG4gICAgLy8gJ+ODn+ODq+OCrycsXG4gICAgLy8gJ+mbouS5s+mjnycsXG4gICAgLy8gJ+OBneOBruS7lidcbiAgICB7XCJpZFwiOiBcIjIwNjEzNVwiLCBcIm5hbWVcIjogXCLjgYrjgoTjgaRcIn1cbl07XG5cbmFwcC5jb250cm9sbGVyKCdJdGVtTGlzdEN0cmwnLCBbJyRzY29wZScsICckaHR0cCcsICgkc2NvcGUsICRodHRwKSA9PiB7XG5cbiAgICAkc2NvcGUucGFnZSA9IDA7XG4gICAgJHNjb3BlLmxpc3QgPSBbXTtcbiAgICAkc2NvcGUuZ2VucmVzID0gZ2VucmVzO1xuXG4gICAgJHNjb3BlLnB1c2hOZXh0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICRzY29wZS5wYWdlKys7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnL3Jha3V0ZW4vaXRlbS8nLFxuICAgICAgICAgICAgcGFyYW1zOiAkc2NvcGUucXVlcnlQYXJhbWV0ZXIoKVxuICAgICAgICB9KS5zdWNjZXNzKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAkc2NvcGUubGlzdCA9ICRzY29wZS5saXN0LmNvbmNhdChkYXRhKTtcbiAgICAgICAgfSkuZXJyb3IoKGRhdGEsIHN0YXR1cywgaGVhZGVyKSA9PiBjb25zb2xlLmxvZyhkYXRhLCBzdGF0dXMsIGhlYWRlcikpXG4gICAgfTtcblxuICAgICRzY29wZS5xdWVyeVBhcmFtZXRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2U6ICRzY29wZS5wYWdlXG4gICAgICAgIH1cbiAgICB9O1xufV0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBzaGVyeUFwcFxuICogQGRlc2NyaXB0aW9uXG4gKiAjIHNoZXJ5QXBwXG4gKlxuICogTWFpbiBtb2R1bGUgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5cbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc2hlcnlBcHAnLCBbJ25nUm91dGUnXSk7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgLndoZW4oJy8nLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9zdGF0aWMvaXRlbV9saXN0Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0l0ZW1MaXN0Q3RybCcsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdpdGVtX2xpc3QnXG4gICAgICAgIH0pXG4gICAgICAgIC5vdGhlcndpc2Uoe1xuICAgICAgICAgICAgcmVkaXJlY3RUbzogJy8nXG4gICAgICAgIH0pO1xufSk7XG5cbnJlcXVpcmUoJy4vaXRlbV9saXN0Jyk7Il19
