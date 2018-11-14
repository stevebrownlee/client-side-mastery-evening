import $ from 'jquery';

import movieData from '../data/moviesData';
import locationData from '../data/locationsData';

const clearButtonEvent = () => {
  $('#clear').on('click', () => {
    $('#movie-view').hide();
    $('#movies').show();
    $('#locations').show();
  });
};

const writeView = (movie, locations) => {
  let domString = '';
  domString += `
    <button class="btn btn-danger" id="clear">X</button>
    <div class="single-movie">
      <h2>${movie.name}</h2>
      <h5 class="card-title">${movie.genre}</h5>
      <h5 class="card-title">${movie.releaseDate}</h5>
      <h5 class="card-title">${movie.description}</h5>
      <p class="card-text">${movie.locations.length} Locations</p>
    </div>
    <div id="location-container" class="d-flex flex-wrap">
  `;
  locations.forEach((location) => {
    domString += `
      <div id='${location.id}' class='location'>
        <div class="card">
          <div class="card-header">
            ${location.name}
          </div>
          <div class="card-body">
          <img class="card-img-top" src="${location.imageUrl}" alt="${location.name}">
          <h5 class="card-title">${location.address}</h5>
          </div>
        </div>
      </div>
    `;
  });
  domString += '</div>';
  $('#movie-view').html(domString);
  clearButtonEvent();
};

const setMovieViewEvents = () => {
  $('.movie').on('click', (e) => {
    const movieId = e.target.closest('.movie').id;
    $('#movies').hide();
    $('#locations').hide();
    movieData.getMovieById(movieId).then((movie) => {
      locationData.getMovieLocations(movie.locations).then((locations) => {
        $('#movie-view').show();
        writeView(movie, locations);
      });
    }).catch((error) => {
      console.error(error);
    });
  });
};

export default setMovieViewEvents;
