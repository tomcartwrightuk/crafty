describe('DashboardController', function() {
  var $scope, $location, $rootScope, createController;

  beforeEach(module("craftyApp"))
  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');
    createController = function(mockReview) {
      return $controller('DashboardController', {
        '$scope': $scope,
        'Review': mockReview,
        'reviews': []
      });
    };

    mockSuccessReview = function(review) {
      this.$save = function(successCallback, errorCallback) { 
        successCallback(review);
      };
    }
  }));

  it('should have a defined title', function() {
    var controller = createController(mockSuccessReview);
    expect($scope.title).toBe('Like Tripadvisor - but for beer');
  });

  it('should append a new saved review to the reviews array', function() {
    var controller = createController(mockSuccessReview);
    var newReview = {name: "BeerSpec", brewery: "Jamsine", review: "Angular aftertaste", score: 2};
    $scope.createReview(newReview);
    expect($scope.reviews).toContain(newReview);
  });

  it('set an error message to the message returned from api on error', function() {
    var mockFailedReview = function(review) {
      this.$save = function(successCallback, errorCallback) { 
        errorCallback("Score must be a number between 1 and 5");
      };
    }
    var controller = createController(mockFailedReview);
    $scope.createReview({name: "BeerSpec", brewery: "Jamsine", review: "Angular aftertaste", score: 12})
    expect($scope.reviews.length).toBe(0)
    expect($scope.errMsg).toBe("Score must be a number between 1 and 5");
  });

});
