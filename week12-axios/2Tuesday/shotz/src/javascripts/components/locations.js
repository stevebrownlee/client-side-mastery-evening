import locationData from '../data/locationsData';

const initializeLocationsView = () => {
  locationData.loadLocations().then((locations) => {
    console.log('locations', locations);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeLocationsView };
