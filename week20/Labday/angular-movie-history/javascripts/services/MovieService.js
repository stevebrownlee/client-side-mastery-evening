'use strict';

app.service("MovieService", function ($http, $q, FIREBASE_CONFIG) {
  const getRatedMovies = (userId) => {
    let moviez = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userId}"`)
        .then((fbMovies) => {
          let movieCollection = fbMovies.data;
          if (movieCollection !== null) {
            Object.keys(movieCollection).forEach((key) => {
              movieCollection[key].id = key;
              if (movieCollection[key].isWatched) {
                moviez.push(movieCollection[key]);
              }
            });
          }
          resolve(moviez);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const getWishlistMovies = (userId) => {
    let moviez = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userId}"`)
        .then((fbMovies) => {
          let movieCollection = fbMovies.data;
          if (movieCollection !== null) {
            Object.keys(movieCollection).forEach((key) => {
              movieCollection[key].id = key;
              if (!movieCollection[key].isWatched) {
                moviez.push(movieCollection[key]);
              }
            });
          }
          resolve(moviez);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const postNewMovie = (newMovie) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/movies.json`, JSON.stringify(newMovie));
  };

  const updateMovie = (movie, movieId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`, JSON.stringify(movie));
  };

  const deleteMovie = (movieId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`);
  };

  return { getRatedMovies, getWishlistMovies, postNewMovie, deleteMovie, updateMovie };
});
