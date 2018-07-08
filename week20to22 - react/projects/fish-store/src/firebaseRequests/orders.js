import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/fishes.json`)
      .then(res => {
        const fishes = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            fishes.push(res.data[fbKey]);
          });
        }
        resolve(fishes);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postRequest = (newOrder) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/orders.json`, newOrder)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { getRequest, postRequest };
