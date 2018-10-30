import locationData from '../data/locationsData';

const initalizelocationsView = () => {
  locationData.loadlocations().then((locations) => {
    console.log('locations', locations);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initalizelocationsView };
