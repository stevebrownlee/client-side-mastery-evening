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
    let newMovie = createMovie(selectedMovie);
    MovieService.postNewMovie(newMovie).then((result) => {
      $location.path('/rated');
    }).catch((error) => {
      console.log("error in postNewMovie", error);
    });
  };


});