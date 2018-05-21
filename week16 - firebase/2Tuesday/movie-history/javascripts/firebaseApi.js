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

module.exports = {
  setKey,
  saveMovie,
};
