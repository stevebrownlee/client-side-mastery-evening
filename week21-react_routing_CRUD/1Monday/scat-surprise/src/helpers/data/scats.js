import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const scats = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          scats.push(res.data[fbKey]);
        });
      }
      resolve(scats);
    })
    .catch(err => reject(err));
});

const getSingle = scatId => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/scats/${scatId}.json`)
    .then((res) => {
      resolve(res.data);
    })
    .catch(err => reject(err));
});

const deleteRequest = scatId => axios.delete(`${baseUrl}/scats/${scatId}.json`);

const postRequest = newScat => axios.post(`${baseUrl}/scats.json`, newScat);

const putRequest = (scatId, updatedScat) => axios.put(`${baseUrl}/scats/${scatId}.json`, updatedScat);

export default {
  getRequest,
  deleteRequest,
  postRequest,
  getSingle,
  putRequest,
};
