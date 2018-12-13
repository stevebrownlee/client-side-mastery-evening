import axios from 'axios';
import constants from '../../constants';

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${constants.firebaseConfig.databaseURL}/listings.json`)
    .then((res) => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          listings.push(res.data[key]);
        });
      }
      resolve(listings);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getRequest };
