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
    it('it should have Learn Angular as first item', function () {
    	expect($scope.items[0]).toEqual('Learn Angular');
    });
    it('it should have Build Angular as second item', function(){
    	expect($scope.items[1]).toEqual('Build Angular')
    });
    describe('add', function () {
    	it('should have 3 items after added', function(){
    		$scope.add('Eat Lunch');
    		expect($scope.items.length).toEqual(3);
    	});
    	it('should clear new item box after added', function () {
    		$scope.newItem = "Eat Lunch";
    		$scope.add('Eat Lunch');
    		expect($scope.newItem).toEqual('');
    	});
    });
});

