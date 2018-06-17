import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/listings.json`)
      .then(res => {
        const listings = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            listings.push(res.data[fbKey]);
          });
        }
        resolve(listings);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postRequest = listing => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/listings.json`, listing)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { getRequest, postRequest };
