import $ from 'jquery';

const loadMovies = () => {
  const moviePromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3003/movies')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return moviePromise;
};

const getMovieById = (movieId) => {
  const singleMoviePromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3003/movies')
      .done((data) => {
        const selectedMovie = data.find(movie => movie.id === movieId);
        resolve(selectedMovie);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return singleMoviePromise;
};


export default { loadMovies, getMovieById };
