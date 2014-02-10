'use strict';

angular.module('craftyApp', ['ngRoute', 'craftyApp.controllers', 'craftyApp.resources'])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.headers.post['Accept']='application/json';
    $httpProvider.defaults.headers.post['Content-Type']='application/json';
    $httpProvider.defaults.headers.common['Accept']='application/json';
    $httpProvider.defaults.headers.common['Content-Type']='application/json';

    $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardController'});
    $routeProvider.otherwise({redirectTo: '/dashboard'});
    $locationProvider.html5Mode(true);
  }]);

angular.module('craftyApp.controllers', ['ng-rails-csrf'])
  .controller('DashboardController', ['$scope', 'Review', function($scope, Review) {
    $scope.title = "Like Tripadvisor - but for beer";

    // This is initial array of reviews - they could be retrieved from the server using the Review factory.
    $scope.errMsg = {};
    $scope.reviews = [
      {name: "Golden Ale", brewery: "Crate", score: 5, review: "Perfect level of sweetness"},
      {name: "Pale Ale Centennial", brewery: "Kernel", score: 3, review: "Slightly sour tasting for my taste"},
      {name: "Ink Stout", brewery: "Camden Town", score: 4, review: "A smooth stout with a medium body"}
    ]

    $scope.newReview = {};

    $scope.createReview = function(review) {
      review = new Review(review);
      review.$save(function(data) {
          $scope.reviews.push(data);
          $scope.newReview = {}
        },
        function(err) {
          $scope.errMsg = err
        });
    };
  }])

angular.module('craftyApp.resources', ['ngResource'])
  .factory('Review', ['$resource', function ($resource) {
    var review = $resource('/api/reviews/:id',
      { id: '@id' },
      {
        update: { method:'PUT' }
      }
    );
    return review;
  }]);

