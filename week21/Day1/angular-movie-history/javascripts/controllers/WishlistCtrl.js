'use strict';

app.controller("WishlistCtrl", function ($location, $rootScope, $scope, MovieService) {
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

  $scope.switchWatched = (movie) => {
    movie.isWatched = true;
    let updatedMovie = MovieService.createMovieObject(movie);
    MovieService.updateMovie(updatedMovie, movie.id).then((results) =>{
      getMovies();
    }).catch((err) => {
      console.log("errror in updateMovie", err);
    });
  };

  $scope.movieDetail = (movieId) => {
    $location.path(`/movie/${movieId}`);
  };
});