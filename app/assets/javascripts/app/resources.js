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
