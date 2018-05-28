let firebaseConfig = {};

const setConfig = (config) => {
  firebaseConfig = config;
};

const addMovieToDB = (movie) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      data: JSON.stringify(movie),
      url: `${firebaseConfig.databaseURL}/movies.json`,
    })
      .done((uniqueFirebaseKey) => {
        resolve(uniqueFirebaseKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getMoviesFromDB = () => {
  return new Promise((resolve, reject) => {
    $.get(`${firebaseConfig.databaseURL}/movies.json`)
      .done((allMoviesObj) => {
        const allMoviesArray = [];
        if (allMoviesObj != null) {
          Object.keys(allMoviesObj).forEach((movieKey) => {
            allMoviesObj[movieKey].id = movieKey;
            allMoviesArray.push(allMoviesObj[movieKey]);
          });
        };
        resolve(allMoviesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteMovieFromDB = (movieToDeleteId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/movies/${movieToDeleteId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const updateWatchedForMovieInDb = (movieToUpdateId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PATCH',
      data: JSON.stringify({ 'isWatched': true, }),
      url: `${firebaseConfig.databaseURL}/movies/${movieToUpdateId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  addMovieToDB,
  getMoviesFromDB,
  deleteMovieFromDB,
  updateWatchedForMovieInDb,
};
