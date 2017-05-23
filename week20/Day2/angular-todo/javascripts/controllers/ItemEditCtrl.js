app.controller("ItemEditCtrl", function($location, $routeParams, $scope, ItemFactory) {
	$scope.newTask = {};



	ItemFactory.getSingleItem($routeParams.id).then((results) => {
		console.log("results", results);
		// debugger;
		results.data.dueDate = new Date(results.data.dueDate)
		$scope.newTask = results.data;
		// debugger;
		// $scope.newTask.dueDate = new Date(results.data.newDate);
	}).catch((error) => {
		console.log("getSingleItem", error);
	});

	$scope.addNewItem = () => {
		ItemFactory.editItem($scope.newTask).then(() => {
			$location.url('/items/list');
		}).catch((error) => {
			console.log("editItem", error);
		});
	};
});