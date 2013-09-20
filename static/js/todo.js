function TodoController($scope){
	$scope.items = [
		'Learn Angular',
		'Build Angular'
	];

	$scope.add = function(newItem){
		$scope.items.push(newItem);
		$scope.newItem = '';
	}
}