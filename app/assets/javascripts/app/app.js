'use strict';

angular.module('craftyApp', ['ngRoute', 'craftyApp.controllers', 'craftyApp.resources'])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.headers.post['Accept']='application/json';
    $httpProvider.defaults.headers.post['Content-Type']='application/json';
    $httpProvider.defaults.headers.common['Accept']='application/json';
    $httpProvider.defaults.headers.common['Content-Type']='application/json';

    $routeProvider.when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController',
      resolve: {
        reviews: ['Review',
          function (Review) {
            return Review.query();
          }
        ],
      }
    });
    $routeProvider.otherwise({redirectTo: '/dashboard'});
    $locationProvider.html5Mode(true);
  }]);
