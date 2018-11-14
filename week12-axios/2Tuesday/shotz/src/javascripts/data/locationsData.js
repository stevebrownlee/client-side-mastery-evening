import $ from 'jquery';

const loadLocations = () => {
  const locationPromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3004/locations')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return locationPromise;
};

const getMovieLocations = (locationIds) => {
  const locationsPromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3004/locations')
      .done((data) => {
        const correctLocations = data.filter(x => locationIds.includes(x.id));
        resolve(correctLocations);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return locationsPromise;
};


export default { loadLocations, getMovieLocations };
