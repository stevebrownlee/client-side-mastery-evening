import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/fishes.json`)
    .then((res) => {
      const fishes = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          fishes.push(res.data[fbKey]);
        });
      }
      resolve(fishes);
    })
    .catch(err => reject(err));
});

export default { getRequest };
