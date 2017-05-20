"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name:"New Item"}];
});

app.controller("TodoCtrl", function($scope){
      $scope.welcome = "hello";
      $scope.showListView = true;
      $scope.newTask = {};
      $scope.items = [
        {
          id: 0,
          task: "mow the lawn",
          isCompleted: true,
          assignedTo: "Callan",
        },
        {
          id: 1,
          task: "grade quizzes",
          isCompleted: false,
          assignedTo: "Lauren",
        },
        {
          id: 2,
          task: "take a nap",
          isCompleted: false,
          assignedTo: "Zoe",
        }
      ];

      $scope.newItem = function(){
          console.log("you clicked new Item");
          $scope.showListView = false;
      };
      
      $scope.allItem = function(){
        console.log("you clicked all items");
        $scope.showListView = true;
      };

      $scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log("you added a new item", $scope.newTask);
        $scope.items.push($scope.newTask);
        $scope.newTask="";
        $scope.showListView = true;
      };

});