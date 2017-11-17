'use strict';

app.controller("RatedCtrl", function($scope,  $rootScope, MovieService) {
  $scope.movies = [];

  const getMovies = () => {
    MovieService.getRatedMovies($rootScope.uid).then((results) =>{
      $scope.movies =results;
    }).catch((err) => {
      console.log("errror in getRatedMovies", err);
    });
  };

  getMovies();

  $scope.deleteMovie = (movie) => {
    MovieService.deleteMovie(movie.id).then((results) =>{
      getMovies();
    }).catch((err) => {
      console.log("errror in deleteMovie", err);
    });
  };
});