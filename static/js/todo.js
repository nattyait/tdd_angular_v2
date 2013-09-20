//inject TodoService to controller
function TodoController($scope, TodoService){
	$scope.items = [
		{name: 'Learn Angular'},
		{name: 'Build Angular'},
	];

	$scope.add = function(newItem){
		$scope.items.push({name: newItem});
		$scope.newItem = '';
	}

	$scope.load = function (){
		$scope.items = TodoService.query();
	}

	$scope.save = function (){
		TodoService.save($scope.items);
	}
};

//client side
//below is a function, need to be registered
todoApp = angular.module('TodoApp', ['ngResource']);
todoApp.factory('TodoService', TodoService);
//$scope = first arg to inject
//$TodoService = secode arg to inject
//TodoControll'r = last item -- the real controller
injectList = ['$scope', 'TodoService', 'TodoContoller'];
todoApp.controller('TodoContoller', injectList);
function TodoService($resource){
	var url, defaultParams, actions;
	url = "https://natty-todo-app.firebaseio.com/todos.json";
	defaultParams = {};
	//override because firebase doesn't accept method Post for save action
	actions = {
		save: { method: 'PUT', isArray: true}
	}
	return $resource(url, defaultParams, actions)
};