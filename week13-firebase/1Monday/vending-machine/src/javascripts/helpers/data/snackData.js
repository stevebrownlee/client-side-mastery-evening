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

export default { getSnacksByUid };
