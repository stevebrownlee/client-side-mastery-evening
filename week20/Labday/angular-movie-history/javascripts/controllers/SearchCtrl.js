'use strict';

app.controller("SearchCtrl", function ($location, $rootScope, $scope, MovieService, tmdbService) {
  $scope.movies = [];

  $scope.enterPush = (event) => {
    if (event.keyCode === 13) {
      tmdbService.searchMovies(event.target.value).then((result) => {
        $scope.movies = result;
      }).catch((err) => {
        console.log("searchMovies error", err);
      });
    }
  };

  const createMovie = (movie) => {
    return {
      "title": movie.title,
      "overview": movie.overview,
      "poster_path": movie.poster_path,
      "rating": 0,
      "isWatched": true,
      "uid": $rootScope.uid
    };
  };

  $scope.saveRated = (selectedMovie) => {
    selectedMovie.isWatched = true;
    selectedMovie.rating = 0;
    selectedMovie.uid = $rootScope.uid;
    let newMovie = MovieService.createMovieObject(selectedMovie);
    MovieService.postNewMovie(newMovie).then((result) => {
      $location.path('/rated');
    }).catch((error) => {
      console.log("error in postNewMovie - rated", error);
    });
  };

  $scope.saveWishlist = (selectedMovie) => {
    selectedMovie.isWatched = false;
    selectedMovie.rating = 0;
    selectedMovie.uid = $rootScope.uid;
    let newMovie = MovieService.createMovieObject(selectedMovie);
    MovieService.postNewMovie(newMovie).then((result) => {
      $location.path('/wishlist');
    }).catch((error) => {
      console.log("error in postNewMovie - wishlist", error);
    });
  };
});