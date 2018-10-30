import $ from 'jquery';

import movieData from '../data/moviesData';

const writeMovies = (movies) => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `
      <div id='${movie.id}' class='col-4 cardz'>
        <div class="card">
          <div class="card-header">
            ${movie.name}
          </div>
          <div class="card-body">
          <h5 class="card-title">${movie.genre}</h5>
          <h5 class="card-title">${movie.releaseDate}</h5>
          <h5 class="card-title">${movie.description}</h5>
          <p class="card-text">${movie.locations.length} Locations</p>
          </div>
        </div>
      </div>
    `;
  });
  $('#movie-container').html(domString);
};

const initializeMoviesView = () => {
  movieData.loadMovies().then((movies) => {
    console.log('movies', movies);
    writeMovies(movies);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeMoviesView };
