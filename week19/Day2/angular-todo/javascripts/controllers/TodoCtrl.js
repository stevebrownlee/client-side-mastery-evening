"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){
      $scope.welcome = "hello";
      $scope.showListView = true;
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

      $scope.newItem = function(){   
          $scope.showListView = false;
      };
      
      $scope.allItem = function(){
        $scope.showListView = true;
      };

      $scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        ItemFactory.postNewItem($scope.newTask)
            .then(function (response) {
                console.log('controller post respose', response);
                getItems();
                $scope.showListView = true;
            });
      };

      $scope.deleteItem = function(itemId){
        ItemFactory.deleteItem(itemId).then(function (response) {
          getItems();              
        });
      }

});