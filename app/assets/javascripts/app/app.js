'use strict';

angular.module('floaderApp', ['ngRoute', 'floaderApp.controllers'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardController'});
    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);

angular.module('floaderApp.controllers', []).
  controller('DashboardController', ['$scope', function($scope) {
    $scope.title = "Start floading!";
    $scope.photos = [
      {url: "http://farm4.staticflickr.com/3777/12338715275_b70413315f_b.jpg"},
      {url: "http://farm8.staticflickr.com/7460/12338715935_2d4f2bd1fb_b.jpg"},
      {url: "http://farm8.staticflickr.com/7436/12338718235_7410ca6933_b.jpg"},
      {url: "http://farm6.staticflickr.com/5485/12338719315_58c3b08c0a_b.jpg"},
      {url: "http://farm4.staticflickr.com/3703/12338722165_ef6606329c_b.jpg"},
      {url: "http://farm3.staticflickr.com/2826/12338722515_7b3966bc45_b.jpg"},
      {url: "http://farm3.staticflickr.com/2876/12338723015_ca46de68a2_b.jpg"},
      {url: "http://farm3.staticflickr.com/2814/12338725785_1ac1d97191_b.jpg"},
      {url: "http://farm6.staticflickr.com/5515/12338729805_ce6b83590e_b.jpg"},
      {url: "http://farm8.staticflickr.com/7325/12338730235_c93c428ff6_b.jpg"} 
    ]
  }])
