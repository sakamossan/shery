(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = angular.module('sheryApp');

/**
 * @ngdoc function
 * @name sheryApp.controller:ItemListCtrl
 * @description
 * # ItemListCtrl
 * fetch and listing item data
 */
app.controller('ItemListCtrl', ['$scope', '$http', function ($scope, $http) {

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
        }).error(function (data, status, header) {
            console.log(data, status, header);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaXRlbV9saXN0LmpzIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVY7Ozs7Ozs7OztBQVNBLElBQUksVUFBSixDQUFlLGNBQWYsRUFBK0IsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixVQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFBeUI7O0FBRXhFLFdBQU8sSUFBUCxHQUFjLENBQWQ7QUFDQSxXQUFPLElBQVAsR0FBYyxFQUFkOztBQUVBLFdBQU8sYUFBUCxHQUF1QixZQUFZO0FBQy9CLGVBQU8sSUFBUDtBQUNBLGVBQU8sTUFBTTtBQUNULG9CQUFRLEtBREM7QUFFVCxpQkFBSyxnQkFGSTtBQUdULG9CQUFRLEVBQUUsTUFBTSxPQUFPLElBQWY7QUFIQyxTQUFOLEVBSUosT0FKSSxDQUlJLFVBQVUsSUFBVixFQUFnQjtBQUN2QixtQkFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBQVksTUFBWixDQUFtQixJQUFuQixDQUFkO0FBQ0gsU0FOTSxFQU1KLEtBTkksQ0FNRSxVQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCO0FBQ3BDLG9CQUFRLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLE1BQTFCO0FBQ0gsU0FSTSxDQUFQO0FBU0gsS0FYRDtBQVlILENBakI4QixDQUEvQjs7O0FDVEE7Ozs7Ozs7Ozs7O0FBV0EsSUFBSSxNQUFNLFFBQVEsTUFBUixDQUFlLFVBQWYsRUFBMkIsQ0FBQyxTQUFELENBQTNCLENBQVY7O0FBRUEsSUFBSSxNQUFKLENBQVcsVUFBVSxjQUFWLEVBQTBCO0FBQ2pDLG1CQUNLLElBREwsQ0FDVSxHQURWLEVBQ2U7QUFDUCxxQkFBYSx3QkFETjtBQUVQLG9CQUFZLGNBRkw7QUFHUCxzQkFBYztBQUhQLEtBRGYsRUFNSyxTQU5MLENBTWU7QUFDUCxvQkFBWTtBQURMLEtBTmY7QUFTSCxDQVZEOztBQVlBLFFBQVEsYUFBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3NoZXJ5QXBwJyk7XG5cbi8qKlxuICogQG5nZG9jIGZ1bmN0aW9uXG4gKiBAbmFtZSBzaGVyeUFwcC5jb250cm9sbGVyOkl0ZW1MaXN0Q3RybFxuICogQGRlc2NyaXB0aW9uXG4gKiAjIEl0ZW1MaXN0Q3RybFxuICogZmV0Y2ggYW5kIGxpc3RpbmcgaXRlbSBkYXRhXG4gKi9cbmFwcC5jb250cm9sbGVyKCdJdGVtTGlzdEN0cmwnLCBbJyRzY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwKSB7XG5cbiAgICAkc2NvcGUucGFnZSA9IDA7XG4gICAgJHNjb3BlLmxpc3QgPSBbXTtcblxuICAgICRzY29wZS5wdXNoTmV4dEl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUucGFnZSsrO1xuICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJy9yYWt1dGVuL2l0ZW0vJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBwYWdlOiAkc2NvcGUucGFnZSB9XG4gICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICRzY29wZS5saXN0ID0gJHNjb3BlLmxpc3QuY29uY2F0KGRhdGEpO1xuICAgICAgICB9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSwgc3RhdHVzLCBoZWFkZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIHNoZXJ5QXBwXG4gKiBAZGVzY3JpcHRpb25cbiAqICMgc2hlcnlBcHBcbiAqXG4gKiBNYWluIG1vZHVsZSBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cblxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaGVyeUFwcCcsIFsnbmdSb3V0ZSddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL3N0YXRpYy9pdGVtX2xpc3QuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSXRlbUxpc3RDdHJsJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2l0ZW1fbGlzdCdcbiAgICAgICAgfSlcbiAgICAgICAgLm90aGVyd2lzZSh7XG4gICAgICAgICAgICByZWRpcmVjdFRvOiAnLydcbiAgICAgICAgfSk7XG59KTtcblxucmVxdWlyZSgnLi9pdGVtX2xpc3QnKTsiXX0=
