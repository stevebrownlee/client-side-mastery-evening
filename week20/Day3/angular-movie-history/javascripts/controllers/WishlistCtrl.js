'use strict';

app.controller("WishlistCtrl", function ($rootScope, $scope, MovieService) {
  $scope.movies = [];

  const getMovies = () => {
    MovieService.getWishlistMovies($rootScope.uid).then((results) =>{
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