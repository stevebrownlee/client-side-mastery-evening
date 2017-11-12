'use strict';

app.service("tmdbService", function ($http, $q, TMDB_KEY) {

  const searchMovies = (query) => {
    return $q((resolve, reject) => {
      $http.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        .then((results) => {
          resolve(results.data.results);
        }).catch((error) => {
          reject(error);
        });
    });
  };

  const tmdbConfiguration = () => {
    return $http.get(`https://api.themoviedb.org/3/configuration?api_key=${TMDB_KEY}`);
  };

  return { searchMovies, tmdbConfiguration };
});
