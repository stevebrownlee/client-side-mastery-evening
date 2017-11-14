'use strict';

app.controller("RatedCtrl", function($scope,  $rootScope, MovieService) {
  $scope.movies = [];

  MovieService.getRatedMovies($rootScope.uid).then((results) =>{
    $scope.movies =results;
  }).catch((err) => {
    console.log("errror in getRatedMovies", err);
  });
});