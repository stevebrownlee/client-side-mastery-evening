"use strict";

app.controller("ItemNewCtrl", function($scope, ItemFactory, $location){
  $scope.message = "ItemNewCtrl";

  	$scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        ItemFactory.postNewItem($scope.newTask).then(function (response) {
          $scope.newTask = {};
          $location.url("/items/list");
        });
    };
});