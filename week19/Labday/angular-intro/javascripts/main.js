'use strict';

let app = angular.module('bitchinApp', []);

app.controller('MainCtrl', ($scope) => {
  $scope.yo_mama = "hey";
  $scope.colors = ['green', 'blue', 'red', 'orange'];
  $scope.movies = [];

  $scope.fancyButtonFunction = () => {
    console.log("I clicked a button");
  };

  let getMovies = () => {
    return [{
      "title": "Star Wars: The Force Awakens0",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "poster_path": "weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
      "rating": 5,
      "isWatched": false,
      "actors": ['zoe', 'callan', 'lauren']
    }, {
      "title": "Star Wars: The Force Awakens1",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "poster_path": "weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
      "rating": 5,
      "isWatched": false,
      "actors": ['zoe', 'callan', 'lauren']
    }, {
      "title": "Star Wars: The Force Awakens2",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "poster_path": "weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
      "rating": 5,
      "isWatched": false,
      "actors": ['zoe', 'callan', 'lauren']
    }, {
      "title": "Star Wars: The Force Awakens3",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "poster_path": "weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
      "rating": 5,
      "isWatched": false,
      "actors": ['zoe', 'callan', 'lauren']
    }, {
      "title": "Star Wars: The Force Awakens4",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "poster_path": "weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
      "rating": 5,
      "isWatched": false,
      "actors": ['zoe', 'callan', 'lauren']
    }];
  };

  $scope.printMovies = () => {
    $scope.movies = getMovies();
  };
});