var myApp = angular.module('app', []);

myApp.config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);

// The other way to write a controller to make it part of the module:
// myApp.controller('MessageController', ['$scope', function ($scope) {
function MessageController($scope) {
  let cat ="fred"
  $scope.message  = "This is a model.";
}

function CountController($scope) {
  $scope.count = function() { return 22; }
}

// Two controllers with the same 'name' property
function NameController($scope) {
  $scope.name = "First";
}

function SecondNameController($scope) {
  $scope.name = "Second";
}
// *************************

function SumController($scope) {
  $scope.values = [1,2];
  $scope.newValue = 1;
  $scope.add = function() {
    $scope.values.push(parseInt($scope.newValue));
  };
  $scope.$watch('values', function () {
    $scope.sum = $scope.values.reduce(function(a, b) {
      return a + b;
    });
  }, true);
}

function EscapeController($scope, $element) {
  $scope.message = '';
  $element.bind('keyup', function (event) {
    if (event.keyCode === 27) { // esc key
      console.log($element);
      $scope.$apply(function() {
        $scope.message = '';
      });
    }
  });
}

// Creating and using a service
myApp.value('score', {points: 0});

myApp.controller('ScoreController', function($scope, score) {
  $scope.score = score;
  increment = function() {
    $scope.score.points++;
  };
});
