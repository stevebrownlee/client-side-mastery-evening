"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, ItemFactory){
  	$scope.message = "ItemListCtrl";
	$scope.newTask = {};
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems){
			$scope.items = fbItems;
		}, function(error){
			console.log("error", error);
			$scope.items = [];
		});  
	};

	getItems();

	$scope.deleteItem = function(itemId){
		ItemFactory.deleteItem(itemId).then(function (response) {
			getItems();              
		});
	};

	$scope.inputChange = function(thingy){
		ItemFactory.editItem(thingy).then(function(response){
	        console.log("inputChange response", response);
	    });
	};
});