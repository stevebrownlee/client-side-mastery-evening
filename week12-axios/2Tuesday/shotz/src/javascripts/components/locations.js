import $ from 'jquery';

import locationData from '../data/locationsData';

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
      <div id='${location.id}' class='col-3 cardz'>
        <div class="card">
          <div class="card-header ${shootTimeClass(location.shootTime)}">
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
  $('#location-container').html(domString);
};

const initializeLocationsView = () => {
  locationData.loadLocations().then((locations) => {
    writeLocations(locations);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeLocationsView };
