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
        Object.keys(allMoviesObj).forEach((movieKey) => {
          allMoviesObj[movieKey].id = movieKey;
          allMoviesArray.push(allMoviesObj[movieKey]);
        });
        resolve(allMoviesArray);
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
};
