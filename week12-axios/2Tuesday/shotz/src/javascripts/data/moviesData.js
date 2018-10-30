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

export default { loadMovies };
