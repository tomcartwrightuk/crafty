angular.module('craftyApp.controllers', ['ng-rails-csrf'])
  .controller('DashboardController', ['$scope', '$route', 'Review', 'reviews', function($scope, $route, Review, reviews) {
    $scope.title = "Like Tripadvisor - but for beer";

    $scope.reviews = reviews;
    $scope.errMsg = {};

    if($scope.reviews.length == 0) {
      $scope.displayMsg = true
    }

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

