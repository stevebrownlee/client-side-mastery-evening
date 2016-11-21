"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $rootScope, $routeParams, ItemFactory){
  	$scope.newTask = {};
	ItemFactory.getSingleItem($routeParams.id).then(function(fbItem){
		fbItem.id = $routeParams.id;
		$scope.newTask = fbItem;
	}, function(error){
		console.log("error", error);
		$scope.newTask = {};
	});  


	$scope.addNewItem = function(){
		$scope.newTask.uid = $rootScope.user.uid;
        ItemFactory.editItem($scope.newTask).then(function(response) {
          $scope.newTask = {};
          $location.url("/items/list");
        });
    };
});