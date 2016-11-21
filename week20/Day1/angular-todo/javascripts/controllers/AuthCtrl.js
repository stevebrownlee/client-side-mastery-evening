"use strict";

app.controller("AuthCtrl", function($scope, $location, $routeParams, $rootScope, AuthFactory, UserFactory){
  	$scope.loginContainer = true;
  	$scope.registerContainer = false;
  	$scope.register = {};
  	$scope.login = {};
  	let currentUser = {};
  	
  	let logMeIn = function(loginStuff){
		AuthFactory.authenticate(loginStuff).then(function(didLogin){
  			return UserFactory.getUserInfo(didLogin.uid);
  		}).then(function(userCreds){
  			console.log("userCreds", userCreds);
  			currentUser = userCreds;
  			$rootScope.user = currentUser;
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
  			return UserFactory.storeUser(registerNewUser);
  		}).then(function(registerComplete){
  			return logMeIn(registerNewUser);
		});
  	};

  	$scope.loginUser = function(loginNewUser){
  		logMeIn(loginNewUser);
  	};
});