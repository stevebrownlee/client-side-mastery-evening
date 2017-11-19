'use strict';

app.controller("MovieDetailCtrl", function ($location, $routeParams, $scope, MovieService) {
  $scope.movie = {};
  MovieService.getSingleMovie($routeParams.id).then((results) =>{
    $scope.movie = results.data;
  }).catch((err) => {
    console.log("errror in updateMovie", err);
  });

  $scope.switchWatched = (movie) => {
    movie.isWatched = true;
    movie.id = $routeParams.id;
    let updatedMovie = MovieService.createMovieObject(movie);
    MovieService.updateMovie(updatedMovie, movie.id).then((results) =>{
      $location.path("/rated");
    }).catch((err) => {
      console.log("errror in updateMovie", err);
    });
  };

  $scope.starChange = (event, movie) => {
    if(event.rating){
      movie.rating = event.rating;
      let updatedMovie = MovieService.createMovieObject(movie);
      MovieService.updateMovie(updatedMovie, $routeParams.id).then(() =>{
      }).catch((err) => {
        console.log("errror in updateMovie", err);
      });
    }
  };
});