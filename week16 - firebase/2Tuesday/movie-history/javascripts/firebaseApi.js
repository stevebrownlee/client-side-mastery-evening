let firebaseKey = '';

const setKey = (key) => {
  firebaseKey = key;
};

const saveMovie = (movie) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseKey.databaseURL}/movies.json`,
      data: JSON.stringify(movie),
    })
      .then((fbMovies) => {
        resolve(fbMovies);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getMovieList = () => {
  const movies = [];
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/movies.json`)
      .then((fbMovies) => {
        if (fbMovies !== null) {
          Object.keys(fbMovies).forEach((key) => {
            fbMovies[key].id = key;
            movies.push(fbMovies[key]);
          });
        }
        resolve(movies);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteMovie = (movieId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseKey.databaseURL}/movies/${movieId}.json`,
    })
      .then((fbMovies) => {
        resolve(fbMovies);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setKey,
  saveMovie,
  getMovieList,
  deleteMovie,
};
