'use strict';

app.controller("AuthCtrl", function ($location, $rootScope, $scope, AuthService) {
  $scope.authenticate = () => {
    AuthService.authenticateGoogle().then((result) => {
      $rootScope.uid = result.user.uid;
      $location.url("/rated");
    }).catch((err) => {
      console.log("authenticateGoogle err", err);
    });
  };
});