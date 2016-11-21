"use strict";

app.controller("AuthCtrl", function($scope, $location, $routeParams, $rootScope, AuthFactory, UserFactory){
  	$scope.loginContainer = true;
  	$scope.registerContainer = false;
  	$scope.register = {};
  	$scope.login = {};
  	
    if($location.path() === "/logout"){
      AuthFactory.logout();
      $rootScope.user = {};
      $location.url('/auth');
    }


  	let logMeIn = function(loginStuff){
		AuthFactory.authenticate(loginStuff).then(function(didLogin){
  			return UserFactory.getUser(didLogin.uid);
  		}).then(function(userCreds){
  			$rootScope.user = userCreds;
  			$scope.login = {};
  			$scope.register = {};
  			$location.url("/items/list");
  		});
  	};

  	$scope.setRegisterContainer = function(){
		$scope.loginContainer = false;
  		$scope.registerContainer = true;
  	};

  	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
  		$scope.registerContainer = false;
  	};

  	$scope.registerUser = function(registerNewUser){
  		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
  			registerNewUser.uid = didRegister.uid;
  			return UserFactory.addUser(registerNewUser);
  		}).then(function(registerComplete){
  			return logMeIn(registerNewUser);
		});
  	};

  	$scope.loginUser = function(loginNewUser){
  		logMeIn(loginNewUser);
  	};




});