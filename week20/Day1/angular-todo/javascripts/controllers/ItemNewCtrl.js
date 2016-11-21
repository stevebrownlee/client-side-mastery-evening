"use strict";

app.controller("ItemNewCtrl", function($scope, $rootScope, ItemFactory, $location){
  $scope.message = "ItemNewCtrl";

  	$scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        $scope.newTask.uid = $rootScope.user.uid;
        ItemFactory.postNewItem($scope.newTask).then(function (response) {
          $scope.newTask = {};
          $location.url("/items/list");
        });
    };
});