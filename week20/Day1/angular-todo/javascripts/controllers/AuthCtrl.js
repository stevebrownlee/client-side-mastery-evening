app.controller("AuthCtrl", function($scope, $location, $routeParams, $rootScope, AuthFactory, UserFactory) {
  $scope.auth = {
  	email: "a@a.com",
  	password: "123456"
  };

  if ($location.path() === "/logout") {
    AuthFactory.logout();
    $rootScope.user = {};
    $location.url('/auth');
  }

  let logMeIn = () => {
    AuthFactory.authenticate($scope.auth).then((didLogin) => {
      return UserFactory.getUser(didLogin.uid);
    }).then((userCreds) => {
      $rootScope.user = userCreds;
      $scope.auth = {};
      	$location.url("/items/list");	
    }).catch((error) => {
    	console.log('getUser error', error);
    });
  };

  $scope.registerUser = () => {
    AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
      $scope.auth.uid = didRegister.uid;
      return UserFactory.addUser($scope.auth);
    }, (error) => {
    	console.log("registerWithEmail error", error);
    }).then((registerComplete) => {
      return logMeIn($scope.auth);
    }).catch((error) => {
    	console.log('logMeIn error', error);
    });
  };

  $scope.loginUser = () => {
    logMeIn();
  };
});
