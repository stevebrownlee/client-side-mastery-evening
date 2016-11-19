app.controller("ItemListCtrl", function($scope, ItemFactory){
  	$scope.message = "ItemListCtrl";
	$scope.newTask = {};
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			$scope.items = fbItems;
		}, function(error){
			console.log("error", error);
			$scope.items = [];
		});  
	}

	getItems();



	$scope.deleteItem = function(itemId){
		ItemFactory.deleteItem(itemId).then(function (response) {
			getItems();              
		});
	}
});