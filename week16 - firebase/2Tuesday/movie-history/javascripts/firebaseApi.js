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

module.exports = {
  setConfig,
  addMovieToDB,
};
