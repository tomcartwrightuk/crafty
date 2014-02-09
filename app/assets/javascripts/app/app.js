'use strict';

angular.module('craftyApp', ['ngRoute', 'craftyApp.controllers'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardController'});
    $routeProvider.otherwise({redirectTo: '/dashboard'});
    $locationProvider.html5Mode(true);
  }]);

angular.module('craftyApp.controllers', []).
  controller('DashboardController', ['$scope', function($scope) {
    $scope.title = "Like Tripadvisor - but for beer";
    $scope.reviews = [
      {name: "Golden Ale", brewery: "Crate", score: 5, review: "Perfect level of sweetness"},
      {name: "Pale Ale Centennial", brewery: "Kernel", score: 3, review: "Slightly sour tasting for my taste"},
      {name: "Ink Stout", brewery: "Camden Town", score: 4, review: "A smooth stout with a medium body"}
    ]
  }])
