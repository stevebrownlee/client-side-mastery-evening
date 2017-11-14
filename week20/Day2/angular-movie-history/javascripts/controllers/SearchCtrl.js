'use strict';

app.controller("SearchCtrl", function($scope, tmdbService) {
  $scope.movies = [];

  $scope.enterPush = (event) => {
    if(event.keyCode === 13){
      tmdbService.searchMovies(event.target.value).then((result) =>{
        $scope.movies = result;
      }).catch((err) =>{
        console.log("searchMovies error", err);
      });
    }
  };
  

});