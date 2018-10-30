import $ from 'jquery';

import locationData from '../data/locationsData';
import movieData from '../data/moviesData';

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};

const writeLocations = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString += `
      <div id='${location.id}' class='location'>
        <div class="card">
          <div class="card-header ${shootTimeClass(location.shootTime)}">
            ${location.name}
          </div>
          <div class="card-body">
          <img class="card-img-top" src="${location.imageUrl}" alt="${location.name}">
          <h5 class="card-title">${location.address}</h5>
          <p class="card-text">Used in ${location.movies.length} Movies</p>
          </div>
        </div>
      </div>
    `;
  });
  $('#location-container').html(domString);
};

const initializeLocationsView = () => {
  locationData.loadLocations().then((locations) => {
    movieData.loadMovies().then((movies) => {
      const locationsWithMovies = locations.map((location) => {
        const newLocation = location;
        newLocation.movies = movies.filter(movie => movie.locations.includes(location.id));
        return newLocation;
      });
      writeLocations(locationsWithMovies);
    });
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeLocationsView };
