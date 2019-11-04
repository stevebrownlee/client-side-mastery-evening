import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSnacksByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snacks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allSnacksObject = result.data;
      const snacks = [];
      if (allSnacksObject != null) {
        Object.keys(allSnacksObject).forEach((snackId) => {
          const newSnack = allSnacksObject[snackId];
          newSnack.id = snackId;
          snacks.push(newSnack);
        });
      }
      resolve(snacks);
    })
    .catch((err) => {
      reject(err);
    });
});

const addNewSnack = (newSnack) => axios.post(`${baseUrl}/snacks.json`, newSnack);

const updateSnack = (snackId, newSnack) => axios.put(`${baseUrl}/snacks/${snackId}.json`, newSnack);

const buySnack = (snackId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snacks/${snackId}.json`)
    .then((result) => {
      const snackObject = result.data;
      snackObject.currentStocked = snackObject.currentStocked === 0 ? 0 : snackObject.currentStocked -= 1;
      updateSnack(snackId, snackObject);
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});


export default { getSnacksByUid, addNewSnack, buySnack };
