app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemFactory){
  	$scope.newTask = {};
	ItemFactory.getSingleItem($routeParams.id).then(function(fbItem){
		fbItem.id = $routeParams.id;
		$scope.newTask = fbItem;
	}, function(error){
		console.log("error", error);
		$scope.newTask = {};
	});  


	$scope.addNewItem = function(){
        ItemFactory.editItem($scope.newTask).then(function(response) {
          $scope.newTask = {};
          $location.url("/items/list");
        });
    };
});