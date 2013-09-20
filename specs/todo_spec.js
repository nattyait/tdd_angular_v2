describe('TodoController', function() {
	var $scope;

	beforeEach(inject (function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		//controller('name', configuration);
		$controller('TodoController', {
			$scope: $scope,
		});
	}));
    it('it should have 2 items after initialize', function() {
    	expect($scope.items.length).toEqual(2);
    });
});

