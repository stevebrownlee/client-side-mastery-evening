"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory){
  	$scope.selectedItem = {};
	ItemFactory.getSingleItem($routeParams.id).then(function(fbItem){
		fbItem.id = $routeParams.id;
		$scope.selectedItem = fbItem;
	}, function(error){
		console.log("error", error);
		$scope.items = [];
	});  
});