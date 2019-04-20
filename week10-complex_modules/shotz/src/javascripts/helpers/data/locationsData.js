import $ from 'jquery';

const loadLocations = () => {
  const locationPromise = new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return locationPromise;
};

const getMovieLocations = (locationIds) => {
  const locationsPromise = new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        const correctLocations = data.locations.filter(x => locationIds.includes(x.id));
        resolve(correctLocations);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return locationsPromise;
};


export default { loadLocations, getMovieLocations };
