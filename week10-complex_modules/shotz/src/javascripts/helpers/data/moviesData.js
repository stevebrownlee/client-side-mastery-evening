import $ from 'jquery';

const loadMovies = () => {
  const moviePromise = new Promise((resolve, reject) => {
    $.get('../db/movies.json')
      .done((data) => {
        resolve(data.movies);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return moviePromise;
};

const getMovieById = (movieId) => {
  const singleMoviePromise = new Promise((resolve, reject) => {
    $.get('../db/movies.json')
      .done((data) => {
        const selectedMovie = data.movies.find(movie => movie.id === movieId);
        resolve(selectedMovie);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return singleMoviePromise;
};


export default { loadMovies, getMovieById };
