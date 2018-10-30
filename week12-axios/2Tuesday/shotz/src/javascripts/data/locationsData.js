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

export default { loadLocations };
